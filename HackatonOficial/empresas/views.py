from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password, make_password
from .models import Empresa
from .serializers import EmpresaSerializer


class EmpresaViewSet(viewsets.ModelViewSet):
    """ViewSet para el modelo Empresa.
    
    Proporciona endpoints completos para:
    - GET /api/empresas/ - Listar todas las empresas
    - POST /api/empresas/ - Crear una nueva empresa
    - GET /api/empresas/{id}/ - Obtener una empresa específica
    - PUT /api/empresas/{id}/ - Actualizar una empresa
    - PATCH /api/empresas/{id}/ - Actualización parcial
    - DELETE /api/empresas/{id}/ - Eliminar una empresa
    - POST /api/empresas/login/ - Iniciar sesión
    - POST /api/empresas/logout/ - Cerrar sesión
    - GET /api/empresas/me/ - Obtener empresa actual
    """
    
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    permission_classes = [AllowAny]
    
    def get_permissions(self):
        """Permite acceso público a lectura, login y registro, autenticado para demás."""
        if self.action in ['login', 'create', 'list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]
    
    def get_serializer_class(self):
        """Retorna el serializer según la acción."""
        return EmpresaSerializer
    
    @action(detail=False, methods=['post'])
    def login(self, request):
        """Endpoint para iniciar sesión como empresa.
        
        Expecta:
        - correo: correo electrónico de la empresa
        - password: contraseña de la empresa
        """
        correo = request.data.get('correo')
        password = request.data.get('password')
        
        if not correo or not password:
            return Response(
                {'error': 'Correo y contraseña son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            empresa = Empresa.objects.get(correo=correo)
        except Empresa.DoesNotExist:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        if check_password(password, empresa.password):
            return Response({
                'message': 'Login exitoso',
                'empresa': {
                    'id': empresa.id,
                    'nombre_empresa': empresa.nombre_empresa,
                    'cedula_juridica': empresa.cedula_juridica,
                    'nombre_representante': empresa.nombre_representante,
                    'telefono': empresa.telefono,
                    'correo': empresa.correo
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def me(self, request):
        """Obtener información de la empresa actual."""
        empresa = request.user
        serializer = self.get_serializer(empresa)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def logout(self, request):
        """Endpoint para cerrar sesión."""
        return Response(
            {'message': 'Logout exitoso'},
            status=status.HTTP_200_OK
        )
    
    @action(detail=False, methods=['post'])
    def registro(self, request):
        """Endpoint para registrar una nueva empresa."""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Empresa registrada exitosamente', 'empresa': serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password, make_password
from .models import Institucion
from .serializers import InstitucionSerializer


class InstitucionViewSet(viewsets.ModelViewSet):
    """ViewSet para el modelo Institucion.
    
    Proporciona endpoints completos para:
    - GET /api/instituciones/ - Listar todas las instituciones
    - POST /api/instituciones/ - Crear una nueva institución
    - GET /api/instituciones/{id}/ - Obtener una institución específica
    - PUT /api/instituciones/{id}/ - Actualizar una institución
    - PATCH /api/instituciones/{id}/ - Actualización parcial
    - DELETE /api/instituciones/{id}/ - Eliminar una institución
    - POST /api/instituciones/login/ - Iniciar sesión
    - POST /api/instituciones/logout/ - Cerrar sesión
    - GET /api/instituciones/me/ - Obtener institución actual
    - POST /api/instituciones/registro/ - Registrar nueva institución
    """
    
    queryset = Institucion.objects.all()
    serializer_class = InstitucionSerializer
    permission_classes = [AllowAny]
    
    def get_permissions(self):
        """Permite acceso público a lectura, login y registro, autenticado para demás."""
        if self.action in ['login', 'create', 'registro', 'list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]
    
    def get_serializer_class(self):
        """Retorna el serializer según la acción."""
        return InstitucionSerializer
    
    @action(detail=False, methods=['post'])
    def login(self, request):
        """Endpoint para iniciar sesión como institución.
        
        Expecta:
        - correo: correo electrónico de la institución
        - password: contraseña de la institución
        """
        correo = request.data.get('correo')
        password = request.data.get('password')
        
        if not correo or not password:
            return Response(
                {'error': 'Correo y contraseña son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            institucion = Institucion.objects.get(correo=correo)
        except Institucion.DoesNotExist:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        if check_password(password, institucion.password):
            return Response({
                'message': 'Login exitoso',
                'institucion': {
                    'id': institucion.id,
                    'nombre': institucion.nombre,
                    'tipo': institucion.tipo,
                    'cedula_juridica': institucion.cedula_juridica,
                    'nombre_responsable': institucion.nombre_responsable,
                    'telefono': institucion.telefono,
                    'correo': institucion.correo,
                    'direccion': institucion.direccion
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def me(self, request):
        """Obtener información de la institución actual."""
        institucion = request.user
        serializer = self.get_serializer(institucion)
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
        """Endpoint para registrar una nueva institución."""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Institución registrada exitosamente', 'institucion': serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


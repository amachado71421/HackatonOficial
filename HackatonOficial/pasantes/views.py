from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password, make_password
from .models import Pasante
from .serializers import PasanteSerializer


class PasanteViewSet(viewsets.ModelViewSet):
    """ViewSet para el modelo Pasante.
    
    Proporciona endpoints completos para:
    - GET /api/pasantes/ - Listar todos los pasantes
    - POST /api/pasantes/ - Crear un nuevo pasante
    - GET /api/pasantes/{id}/ - Obtener un pasante específico
    - PUT /api/pasantes/{id}/ - Actualizar un pasante
    - PATCH /api/pasantes/{id}/ - Actualización parcial
    - DELETE /api/pasantes/{id}/ - Eliminar un pasante
    - POST /api/pasantes/login/ - Iniciar sesión
    - POST /api/pasantes/logout/ - Cerrar sesión
    - GET /api/pasantes/me/ - Obtener pasante actual
    - POST /api/pasantes/registro/ - Registrar nuevo pasante
    """
    
    queryset = Pasante.objects.all()
    serializer_class = PasanteSerializer
    permission_classes = [AllowAny]
    
    def get_permissions(self):
        """Permite acceso público a lectura, login y registro, autenticado para demás."""
        if self.action in ['login', 'create', 'registro', 'list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]
    
    def get_serializer_class(self):
        """Retorna el serializer según la acción."""
        return PasanteSerializer
    
    @action(detail=False, methods=['post'])
    def login(self, request):
        """Endpoint para iniciar sesión como pasante.
        
        Expecta:
        - correo: correo electrónico del pasante
        - password: contraseña del pasante
        """
        correo = request.data.get('correo')
        password = request.data.get('password')
        
        if not correo or not password:
            return Response(
                {'error': 'Correo y contraseña son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            pasante = Pasante.objects.get(correo=correo)
        except Pasante.DoesNotExist:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        if check_password(password, pasante.password):
            return Response({
                'message': 'Login exitoso',
                'pasante': {
                    'id': pasante.id,
                    'nombre': pasante.nombre,
                    'numero_identificacion': pasante.numero_identificacion,
                    'fecha_nacimiento': pasante.fecha_nacimiento,
                    'correo': pasante.correo,
                    'telefono': pasante.telefono,
                    'institucion_educativa': pasante.institucion_educativa
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def me(self, request):
        """Obtener información del pasante actual."""
        pasante = request.user
        serializer = self.get_serializer(pasante)
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
        """Endpoint para registrar un nuevo pasante."""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Pasante registrado exitosamente', 'pasante': serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


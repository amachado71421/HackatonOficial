from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password, make_password
from .models import Empleado
from .serializers import EmpleadoSerializer


class EmpleadoViewSet(viewsets.ModelViewSet):
    """ViewSet para el modelo Empleado.
    
    Proporciona endpoints completos para:
    - GET /api/empleados/ - Listar todos los empleados
    - POST /api/empleados/ - Crear un nuevo empleado
    - GET /api/empleados/{id}/ - Obtener un empleado específico
    - PUT /api/empleados/{id}/ - Actualizar un empleado
    - PATCH /api/empleados/{id}/ - Actualización parcial
    - DELETE /api/empleados/{id}/ - Eliminar un empleado
    - POST /api/empleados/login/ - Iniciar sesión
    - POST /api/empleados/logout/ - Cerrar sesión
    - GET /api/empleados/me/ - Obtener empleado actual
    - POST /api/empleados/registro/ - Registrar nuevo empleado
    """
    
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    permission_classes = [AllowAny]
    
    def get_permissions(self):
        """Permite acceso público a lectura, login y registro, autenticado para demás."""
        if self.action in ['login', 'create', 'registro', 'list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]
    
    def get_serializer_class(self):
        """Retorna el serializer según la acción."""
        return EmpleadoSerializer
    
    @action(detail=False, methods=['post'])
    def login(self, request):
        """Endpoint para iniciar sesión como empleado.
        
        Expecta:
        - correo: correo electrónico del empleado
        - password: contraseña del empleado
        """
        correo = request.data.get('correo')
        password = request.data.get('password')
        
        if not correo or not password:
            return Response(
                {'error': 'Correo y contraseña son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            empleado = Empleado.objects.get(correo=correo)
        except Empleado.DoesNotExist:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        if check_password(password, empleado.password):
            return Response({
                'message': 'Login exitoso',
                'empleado': {
                    'id': empleado.id,
                    'nombre': empleado.nombre,
                    'apellidos': empleado.apellidos,
                    'cedula': empleado.cedula,
                    'fecha_nacimiento': empleado.fecha_nacimiento,
                    'correo': empleado.correo,
                    'telefono': empleado.telefono
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def me(self, request):
        """Obtener información del empleado actual."""
        empleado = request.user
        serializer = self.get_serializer(empleado)
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
        """Endpoint para registrar un nuevo empleado."""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Empleado registrado exitosamente', 'empleado': serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


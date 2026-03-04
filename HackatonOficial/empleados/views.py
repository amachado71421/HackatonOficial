from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import check_password
from .models import Empleado
from .serializers import EmpleadoSerializer


class EmpleadoListCreateView(generics.ListCreateAPIView):
    """Vista para listar y crear empleados.
    
    Endpoints:
    - GET /api/empleados/ - Listar todos los empleados
    - POST /api/empleados/ - Crear un nuevo empleado
    """
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    permission_classes = [AllowAny]


class EmpleadoDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Vista para ver, actualizar y eliminar un empleado.
    
    Endpoints:
    - GET /api/empleados/{id}/ - Obtener un empleado específico
    - PUT /api/empleados/{id}/ - Actualizar un empleado
    - DELETE /api/empleados/{id}/ - Eliminar un empleado
    """
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    permission_classes = [AllowAny]


class LoginView(APIView):
    """Vista para iniciar sesión como empleado.
    
    Endpoint:
    - POST /api/empleados/login/ - Iniciar sesión
    
    Expecta:
    - correo: correo electrónico del empleado
    - password: contraseña del empleado
    """
    permission_classes = [AllowAny]
    
    def post(self, request):
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
        
        # Verificar la contraseña usando check_password
        if check_password(password, empleado.password):
            return Response({
                'message': 'Login exitoso',
                'empleado': {
                    'id': empleado.id,
                    'nombre': empleado.nombre,
                    'apellidos': empleado.apellidos,
                    'correo': empleado.correo
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )


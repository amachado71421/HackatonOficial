from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import check_password
from .models import Institucion
from .serializers import InstitucionSerializer


class InstitucionListCreateView(generics.ListCreateAPIView):
    """Vista para listar y crear instituciones.
    
    Endpoints:
    - GET /api/instituciones/ - Listar todas las instituciones
    - POST /api/instituciones/ - Crear una nueva institución
    """
    queryset = Institucion.objects.all()
    serializer_class = InstitucionSerializer
    permission_classes = [AllowAny]


class InstitucionDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Vista para ver, actualizar y eliminar una institución.
    
    Endpoints:
    - GET /api/instituciones/{id}/ - Obtener una institución específica
    - PUT /api/instituciones/{id}/ - Actualizar una institución
    - DELETE /api/instituciones/{id}/ - Eliminar una institución
    """
    queryset = Institucion.objects.all()
    serializer_class = InstitucionSerializer
    permission_classes = [AllowAny]


class LoginView(APIView):
    """Vista para iniciar sesión como institución.
    
    Endpoint:
    - POST /api/instituciones/login/ - Iniciar sesión
    
    Expecta:
    - correo: correo electrónico de la institución
    - password: contraseña de la institución
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
            institucion = Institucion.objects.get(correo=correo)
        except Institucion.DoesNotExist:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        # Verificar la contraseña usando check_password
        if check_password(password, institucion.password):
            return Response({
                'message': 'Login exitoso',
                'institucion': {
                    'id': institucion.id,
                    'nombre': institucion.nombre,
                    'correo': institucion.correo,
                    'tipo': institucion.tipo
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )


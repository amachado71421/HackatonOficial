from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import check_password
from .models import Empresa
from .serializers import EmpresaSerializer


class EmpresaListCreateView(generics.ListCreateAPIView):
    """Vista para listar y crear empresas."""
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class EmpresaDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Vista para ver, actualizar y eliminar una empresa."""
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class LoginView(APIView):
    """Vista para iniciar sesión."""
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response(
                {'error': 'Correo y contraseña son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            empresa = Empresa.objects.get(correo=email)
        except Empresa.DoesNotExist:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        # Verificar la contraseña usando check_password
        if check_password(password, empresa.password):
            return Response({
                'message': 'Login exitoso',
                'empresa': {
                    'id': empresa.id,
                    'nombre_empresa': empresa.nombre_empresa,
                    'correo': empresa.correo
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Credenciales incorrectas'},
                status=status.HTTP_401_UNAUTHORIZED
            )


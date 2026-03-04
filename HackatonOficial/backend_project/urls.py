from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Import models
from empresas.models import Empresa
from empleados.models import Empleado
from pasantes.models import Pasante
from instituciones.models import Institucion

def home(request):
    return HttpResponse("""
        <h1>API Hackaton</h1>
        <ul>
            <li><a href="/admin/">Admin</a></li>
            <li><a href="/api/">Empresas API</a></li>
            <li><a href="/api/">Pasantes API</a></li>
            <li><a href="/api/">Instituciones API</a></li>
            <li><a href="/api/">Empleados API</a></li>
        </ul>
    """)

@api_view(['POST'])
def login_view(request):
    """Central login endpoint that checks all user types."""
    correo = request.data.get('email') or request.data.get('correo')
    password = request.data.get('password')
    
    if not correo or not password:
        return Response(
            {'error': 'Correo y contraseña son requeridos'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Try empresa
    try:
        empresa = Empresa.objects.get(correo=correo)
        if check_password(password, empresa.password):
            return Response({
                'success': True,
                'user_type': 'empresa',
                'user': {
                    'id': empresa.id,
                    'nombre': empresa.nombre_empresa,
                    'correo': empresa.correo
                }
            }, status=status.HTTP_200_OK)
    except Empresa.DoesNotExist:
        pass
    
    # Try empleado
    try:
        empleado = Empleado.objects.get(correo=correo)
        if check_password(password, empleado.password):
            return Response({
                'success': True,
                'user_type': 'empleado',
                'user': {
                    'id': empleado.id,
                    'nombre': empleado.nombre,
                    'apellidos': empleado.apellidos,
                    'correo': empleado.correo
                }
            }, status=status.HTTP_200_OK)
    except Empleado.DoesNotExist:
        pass
    
    # Try pasante
    try:
        pasante = Pasante.objects.get(correo=correo)
        if check_password(password, pasante.password):
            return Response({
                'success': True,
                'user_type': 'pasante',
                'user': {
                    'id': pasante.id,
                    'nombre': pasante.nombre,
                    'apellidos': pasante.apellidos,
                    'correo': pasante.correo
                }
            }, status=status.HTTP_200_OK)
    except Pasante.DoesNotExist:
        pass
    
    # Try institucion
    try:
        institucion = Institucion.objects.get(correo=correo)
        if check_password(password, institucion.password):
            return Response({
                'success': True,
                'user_type': 'institucion',
                'user': {
                    'id': institucion.id,
                    'nombre': institucion.nombre_institucion,
                    'correo': institucion.correo
                }
            }, status=status.HTTP_200_OK)
    except Institucion.DoesNotExist:
        pass
    
    return Response(
        {'error': 'Credenciales incorrectas'},
        status=status.HTTP_401_UNAUTHORIZED
    )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('api/login', login_view, name='login'),  # Central login endpoint
    path('api/', include('empresas.urls')),
    path('api/', include('pasantes.urls')),
    path('api/', include('instituciones.urls')),
    path('api/', include('empleados.urls')),
    path('api/', include('zonasfrancas.urls')),
]


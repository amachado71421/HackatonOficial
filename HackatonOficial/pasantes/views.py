from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Pasante
from .serializers import PasanteSerializer


class PasanteViewSet(viewsets.ModelViewSet):
    """ViewSet para el modelo Pasante.
    
    Proporciona endpoints para:
    - GET /api/pasantes/ - Listar todos los pasantes
    - POST /api/pasantes/ - Crear un nuevo pasante
    - GET /api/pasantes/{id}/ - Obtener un pasante específico
    - PUT /api/pasantes/{id}/ - Actualizar un pasante
    - DELETE /api/pasantes/{id}/ - Eliminar un pasante
    - POST /api/pasantes/login/ - Iniciar sesión como pasante
    """
    
    queryset = Pasante.objects.all()
    serializer_class = PasanteSerializer
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['post'])
    def login(self, request):
        """Endpoint para iniciar sesión como pasante.
        
        Expecta:
        - correo: correo electrónico del pasante
        - password: contraseña del pasante
        """
        from django.contrib.auth.hashers import check_password
        
        correo = request.data.get('correo')
        password = request.data.get('password')
        
        if not correo or not password:
            return Response(
                {'error': 'Correo y contraseña son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            pasante = Pasante.objects.get(correo=correo)
            if check_password(password, pasante.password):
                return Response({
                    'message': 'Login exitoso',
                    'pasante': PasanteSerializer(pasante).data
                })
            else:
                return Response(
                    {'error': 'Contraseña incorrecta'},
                    status=status.HTTP_401_UNAUTHORIZED
                )
        except Pasante.DoesNotExist:
            return Response(
                {'error': 'Pasante no encontrado'},
                status=status.HTTP_404_NOT_FOUND
            )


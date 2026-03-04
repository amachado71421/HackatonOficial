from rest_framework import viewsets, filters
from rest_framework.permissions import AllowAny
from .models import ZonaFranca
from .serializers import ZonaFrancaSerializer


class ZonaFrancaViewSet(viewsets.ModelViewSet):
    """ViewSet para el modelo ZonaFranca.
    
    Proporciona endpoints completos para:
    - GET /api/zonas-francas/ - Listar todas las zonas francas
    - POST /api/zonas-francas/ - Crear una nueva zona franca
    - GET /api/zonas-francas/{id}/ - Obtener una zona franca específica
    - PUT /api/zonas-francas/{id}/ - Actualizar una zona franca
    - PATCH /api/zonas-francas/{id}/ - Actualización parcial
    - DELETE /api/zonas-francas/{id}/ - Eliminar una zona franca
    
    Además soporta:
    - Búsqueda por nombre, ciudad o país (?search=texto)
    - Filtrado por categoría (?categorias=texto)
    - Filtrado por ciudad (?ciudad=texto)
    - Filtrado por país (?pais=texto)
    """
    
    queryset = ZonaFranca.objects.all()
    serializer_class = ZonaFrancaSerializer
    permission_classes = [AllowAny]
    
    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    
    search_fields = ['nombre', 'ciudad', 'pais', 'categorias']
    ordering_fields = ['nombre', 'ciudad', 'pais', 'created_at']
    ordering = ['nombre']
    
    def get_queryset(self):
        """Filtrar queryset según parámetros de URL."""
        queryset = super().get_queryset()
        
        # Filtrar por ciudad
        ciudad = self.request.query_params.get('ciudad', None)
        if ciudad:
            queryset = queryset.filter(ciudad__icontains=ciudad)
        
        # Filtrar por país
        pais = self.request.query_params.get('pais', None)
        if pais:
            queryset = queryset.filter(pais__icontains=pais)
        
        # Filtrar por categoría
        categoria = self.request.query_params.get('categoria', None)
        if categoria:
            queryset = queryset.filter(categorias__contains=[categoria])
        
        # Filtrar solo activas
        activas_only = self.request.query_params.get('activa', None)
        if activas_only and activas_only.lower() == 'true':
            queryset = queryset.filter(activa=True)
        
        return queryset


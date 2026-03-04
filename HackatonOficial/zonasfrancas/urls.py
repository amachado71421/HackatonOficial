from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ZonaFrancaViewSet

router = DefaultRouter()
router.register(r'zonas-francas', ZonaFrancaViewSet, basename='zonafranca')

urlpatterns = [
    path('', include(router.urls)),
]


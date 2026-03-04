from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PasanteViewSet

router = DefaultRouter()
router.register(r'pasantes', PasanteViewSet, basename='pasante')

urlpatterns = [
    path('', include(router.urls)),
]


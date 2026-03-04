from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InstitucionViewSet

router = DefaultRouter()
router.register(r'instituciones', InstitucionViewSet, basename='institucion')

urlpatterns = [
    path('', include(router.urls)),
]


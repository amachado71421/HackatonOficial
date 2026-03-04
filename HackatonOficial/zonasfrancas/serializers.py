from rest_framework import serializers
from .models import ZonaFranca


class ZonaFrancaSerializer(serializers.ModelSerializer):
    """Serializer para el modelo ZonaFranca.
    
    Expone todos los campos del modelo para la API REST.
    """
    
    class Meta:
        model = ZonaFranca
        fields = [
            'id',
            'nombre',
            'ciudad',
            'pais',
            'imagen',
            'descripcion',
            'categorias',
            'activa',
            'created_at',
            'updated_at',
        ]
        extra_kwargs = {
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True},
        }


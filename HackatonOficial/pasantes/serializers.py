from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Pasante


class PasanteSerializer(serializers.ModelSerializer):
    """Serializer para el modelo Pasante.

    Expone todos los campos del modelo Pasante para la API.
    La contraseña se escribe solo (write_only) por seguridad.
    """

    class Meta:
        model = Pasante
        fields = [
            'id',
            'nombre',
            'numero_identificacion',
            'fecha_nacimiento',
            'correo',
            'telefono',
            'institucion_educativa',
            'password',
            'created_at',
            'updated_at',
        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True},
            'numero_identificacion': {'error_messages': {'unique': 'El número de identificación ya está registrado.'}},
            'correo': {'error_messages': {'unique': 'El correo ya está registrado.'}},
        }
    
    def create(self, validated_data):
        """Crear pasante con contraseña hasheada."""
        password = validated_data.pop('password')
        validated_data['password'] = make_password(password)
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        """Actualizar pasante con contraseña hasheada si se proporciona."""
        password = validated_data.pop('password', None)
        if password:
            validated_data['password'] = make_password(password)
        return super().update(instance, validated_data)


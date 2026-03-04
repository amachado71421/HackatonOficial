from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Empresa


class EmpresaSerializer(serializers.ModelSerializer):
    """Serializer para el modelo Empresa.

    Expone todos los campos del modelo Empresa para la API.
    La contraseña se escribe solo (write_only) por seguridad.

    Nota: `cedula_juridica` y `correo` son `unique=True` en el modelo; si se repiten,
    DRF responderá 400 con un error de validación.
    """

    class Meta:
        model = Empresa
        fields = [
            'id',
            'nombre_empresa',
            'cedula_juridica',
            'nombre_representante',
            'telefono',
            'correo',
            'password',
            'created_at',
            'updated_at',
        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True},
            # Mensajes más claros y consistentes para constraints unique
            'cedula_juridica': {'error_messages': {'unique': 'La cédula jurídica ya está registrada.'}},
            'correo': {'error_messages': {'unique': 'El correo ya está registrado.'}},
        }
    
    def create(self, validated_data):
        """Crear empresa con contraseña hasheada."""
        password = validated_data.pop('password')
        validated_data['password'] = make_password(password)
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        """Actualizar empresa con contraseña hasheada si se proporciona."""
        password = validated_data.pop('password', None)
        if password:
            validated_data['password'] = make_password(password)
        return super().update(instance, validated_data)

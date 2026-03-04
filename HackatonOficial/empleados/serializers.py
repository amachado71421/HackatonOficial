from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Empleado


class EmpleadoSerializer(serializers.ModelSerializer):
    """Serializer para el modelo Empleado.

    Expone todos los campos del modelo Empleado para la API.
    La contraseña se escribe solo (write_only) por seguridad.
    """

    class Meta:
        model = Empleado
        fields = [
            'id',
            'nombre',
            'apellidos',
            'cedula',
            'fecha_nacimiento',
            'correo',
            'telefono',
            'password',
            'created_at',
            'updated_at',
        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True},
            'cedula': {'error_messages': {'unique': 'La cédula ya está registrada.'}},
            'correo': {'error_messages': {'unique': 'El correo ya está registrado.'}},
        }
    
    def create(self, validated_data):
        """Crear empleado con contraseña hasheada."""
        password = validated_data.pop('password')
        validated_data['password'] = make_password(password)
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        """Actualizar empleado con contraseña hasheada si se proporciona."""
        password = validated_data.pop('password', None)
        if password:
            validated_data['password'] = make_password(password)
        return super().update(instance, validated_data)


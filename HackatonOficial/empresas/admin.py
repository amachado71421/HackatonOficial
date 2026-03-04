from django.contrib import admin
from .models import Empresa


@admin.register(Empresa)
class EmpresaAdmin(admin.ModelAdmin):
    """Configuración del admin para el modelo Empresa."""
    
    list_display = (
        'id',
        'nombre_empresa',
        'cedula_juridica',
        'nombre_representante',
        'telefono',
        'correo',
        'created_at'
    )
    search_fields = (
        'nombre_empresa',
        'cedula_juridica',
        'nombre_representante',
        'correo'
    )
    list_filter = ('created_at',)
    readonly_fields = ('created_at', 'updated_at')


from django.contrib import admin
from .models import Pasante


@admin.register(Pasante)
class PasanteAdmin(admin.ModelAdmin):
    """Configuración del admin para el modelo Pasante."""
    
    list_display = (
        'id',
        'nombre',
        'numero_identificacion',
        'correo',
        'telefono',
        'institucion_educativa',
        'created_at'
    )
    search_fields = (
        'nombre',
        'numero_identificacion',
        'correo',
        'institucion_educativa'
    )
    list_filter = ('created_at',)
    readonly_fields = ('created_at', 'updated_at')


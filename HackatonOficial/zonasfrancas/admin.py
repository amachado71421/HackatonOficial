from django.contrib import admin
from .models import ZonaFranca


@admin.register(ZonaFranca)
class ZonaFrancaAdmin(admin.ModelAdmin):
    """Configuración del admin para ZonaFranca."""
    
    list_display = ['nombre', 'ciudad', 'pais', 'activa', 'created_at']
    list_filter = ['activa', 'pais', 'ciudad']
    search_fields = ['nombre', 'ciudad', 'pais', 'descripcion']
    ordering = ['nombre']
    
    fieldsets = (
        ('Información Principal', {
            'fields': ('nombre', 'ciudad', 'pais', 'descripcion')
        }),
        ('Multimedia', {
            'fields': ('imagen',)
        }),
        ('Categorías', {
            'fields': ('categorias',)
        }),
        ('Estado', {
            'fields': ('activa',)
        }),
        ('Metadatos', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    readonly_fields = ['created_at', 'updated_at']


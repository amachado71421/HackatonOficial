from django.db import models


class ZonaFranca(models.Model):
    """Modelo para representar una Zona Franca.
    
    Una zona franca es un área geográfica设计上 para actividades
    de manufactura, exportación y servicios corporativos con
    beneficios tributarios especiales.
    """
    
    nombre = models.CharField(
        max_length=255,
        verbose_name="Nombre de la Zona Franca"
    )
    ciudad = models.CharField(
        max_length=100,
        verbose_name="Ciudad"
    )
    pais = models.CharField(
        max_length=100,
        default="Costa Rica",
        verbose_name="País"
    )
    imagen = models.URLField(
        verbose_name="URL de Imagen",
        blank=True,
        null=True
    )
    descripcion = models.TextField(
        verbose_name="Descripción",
        blank=True,
        null=True
    )
    categorias = models.JSONField(
        default=list,
        verbose_name="Categorías"
    )
    activa = models.BooleanField(
        default=True,
        verbose_name="Zona Activa"
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Fecha de Creación"
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Fecha de Actualización"
    )
    
    class Meta:
        verbose_name = "Zona Franca"
        verbose_name_plural = "Zonas Francas"
        ordering = ['nombre']
    
    def __str__(self):
        return f"{self.nombre} - {self.ciudad}, {self.pais}"


from django.db import models


class Institucion(models.Model):
    """Modelo para representar una Institución Educativa registrante.
    
    Campos basados en el formulario de Institution.jsx:
    - nombre: nombre de la institución
    - tipo: tipo de institución (Colegio, Universidad, Técnico)
    - cedula_juridica: cédula jurídica
    - nombre_responsable: nombre del contacto responsable
    - telefono: teléfono de contacto
    - correo: correo institucional
    - direccion: dirección (Provincia/Cantón)
    - password: contraseña
    """
    
    TIPO_CHOICES = [
        ('Colegio', 'Colegio'),
        ('Universidad', 'Universidad'),
        ('Técnico', 'Técnico'),
    ]
    
    nombre = models.CharField(
        max_length=255, 
        verbose_name="Nombre de la Institución"
    )
    tipo = models.CharField(
        max_length=20, 
        choices=TIPO_CHOICES,
        verbose_name="Tipo de Institución"
    )
    cedula_juridica = models.CharField(
        max_length=20, 
        unique=True, 
        verbose_name="Cédula Jurídica"
    )
    nombre_responsable = models.CharField(
        max_length=255, 
        verbose_name="Nombre del Contacto Responsable"
    )
    telefono = models.CharField(
        max_length=20, 
        verbose_name="Teléfono de Contacto"
    )
    correo = models.EmailField(
        unique=True, 
        verbose_name="Correo Institucional"
    )
    direccion = models.CharField(
        max_length=255, 
        verbose_name="Dirección (Provincia/Cantón)"
    )
    password = models.CharField(
        max_length=128, 
        verbose_name="Contraseña"
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
        verbose_name = "Institución"
        verbose_name_plural = "Instituciones"
        ordering = ['-created_at']
    
    def __str__(self):
        return self.nombre


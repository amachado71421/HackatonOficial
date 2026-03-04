from django.db import models


class Pasante(models.Model):
    """Modelo para representar un Pasante registrante.
    
    Campos basados en el formulario de Pasantes.jsx:
    - nombre: nombre completo del pasante
    - numero_identificacion: número de cédula o identificación estudiantil
    - fecha_nacimiento: fecha de nacimiento
    - correo: correo electrónico
    - telefono: teléfono de contacto
    - institucion_educativa: institución educativa
    - password: contraseña (se maneja de forma segura con Django auth)
    """
    
    nombre = models.CharField(
        max_length=255, 
        verbose_name="Nombre completo"
    )
    numero_identificacion = models.CharField(
        max_length=50, 
        unique=True, 
        verbose_name="Número de Cédula o Identificación"
    )
    fecha_nacimiento = models.DateField(
        verbose_name="Fecha de Nacimiento"
    )
    correo = models.EmailField(
        unique=True, 
        verbose_name="Correo electrónico"
    )
    telefono = models.CharField(
        max_length=20, 
        verbose_name="Teléfono"
    )
    institucion_educativa = models.CharField(
        max_length=255, 
        verbose_name="Institución Educativa"
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
        verbose_name = "Pasante"
        verbose_name_plural = "Pasantes"
        ordering = ['-created_at']
    
    def __str__(self):
        return self.nombre


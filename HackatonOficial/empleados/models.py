from django.db import models


class Empleado(models.Model):
    """Modelo para representar un Empleado.
    
    Campos basados en el formulario de Empleados.jsx:
    - nombre: nombre del empleado
    - apellidos: apellidos del empleado
    - cedula: número de cédula de identidad
    - fecha_nacimiento: fecha de nacimiento
    - correo: correo electrónico
    - telefono: número de teléfono
    - password: contraseña
    """
    
    nombre = models.CharField(
        max_length=100, 
        verbose_name="Nombre"
    )
    apellidos = models.CharField(
        max_length=150, 
        verbose_name="Apellidos"
    )
    cedula = models.CharField(
        max_length=20, 
        unique=True, 
        verbose_name="Número de Cédula"
    )
    fecha_nacimiento = models.DateField(
        verbose_name="Fecha de Nacimiento"
    )
    correo = models.EmailField(
        unique=True, 
        verbose_name="Correo Electrónico"
    )
    telefono = models.CharField(
        max_length=20, 
        verbose_name="Teléfono"
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
        verbose_name = "Empleado"
        verbose_name_plural = "Empleados"
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.nombre} {self.apellidos}"


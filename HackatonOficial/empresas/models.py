from django.db import models


class Empresa(models.Model):
    """Modelo para representar una Empresa registrante.
    
    Campos basados en el formulario de Empresas.jsx:
    - NombreEmpresa: nombre de la empresa
    - CedulaJuridicaEmpresa: cédula jurídica (identificador legal)
    - NombreRepresentanteEmpresa: nombre del representante legal
    - TelefonoEmpresa: teléfono de contacto
    - CorreoEmpresa: correo empresarial
    - PasswordEmpresa: contraseña (se manejaría de forma segura con Django auth)
    - ConfirmarPasswordEmpresa: confirmación de contraseña (validación en frontend)
    """
    
    nombre_empresa = models.CharField(
        max_length=255, 
        verbose_name="Nombre de la Empresa"
    )
    cedula_juridica = models.CharField(
        max_length=20, 
        unique=True, 
        verbose_name="Cédula Jurídica"
    )
    nombre_representante = models.CharField(
        max_length=255, 
        verbose_name="Nombre de Representante Legal"
    )
    telefono = models.CharField(
        max_length=20, 
        verbose_name="Teléfono de Contacto"
    )
    correo = models.EmailField(
        unique=True, 
        verbose_name="Correo Empresarial"
    )
    password = models.CharField(
        max_length=128, 
        verbose_name="Contraseña"
    )
    # ConfirmarPassword no se guarda en BD, es validación en frontend
    
    created_at = models.DateTimeField(
        auto_now_add=True, 
        verbose_name="Fecha de Creación"
    )
    updated_at = models.DateTimeField(
        auto_now=True, 
        verbose_name="Fecha de Actualización"
    )
    
    class Meta:
        verbose_name = "Empresa"
        verbose_name_plural = "Empresas"
        ordering = ['-created_at']
    
    def __str__(self):
        return self.nombre_empresa


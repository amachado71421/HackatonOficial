from django.db import migrations


def seed_zonas_francas(apps, schema_editor):
    ZonaFranca = apps.get_model('zonasfrancas', 'ZonaFranca')
    
    zonas = [
        {
            'nombre': 'La Lima Free Zone',
            'ciudad': 'Cartago',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/LaLima.png',
            'descripcion': 'Zona franca especializada en manufactura avanzada, dispositivos médicos y servicios corporativos.',
            'categorias': ['Manufactura Avanzada', 'Dispositivos Médicos', 'Servicios Corporativos'],
            'activa': True,
        },
        {
            'nombre': 'Coyol Free Zone',
            'ciudad': 'Alajuela',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/CoyolImg.jpg',
            'descripcion': 'Zona franca líder en dispositivos médicos e industria de exportación.',
            'categorias': ['Dispositivos Médicos', 'Exportación', 'Industria'],
            'activa': True,
        },
        {
            'nombre': 'Ultrapark',
            'ciudad': 'Heredia',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/UltraPark.png',
            'descripcion': 'Centro empresarial de servicios corporativos, tecnología e IT.',
            'categorias': ['Servicios Corporativos', 'Tecnología', 'IT'],
            'activa': True,
        },
        {
            'nombre': 'Intel Free Trade Zone Park',
            'ciudad': 'Heredia',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/IntelPark.png',
            'descripcion': 'Parque de tecnología y semiconductores de Intel en Costa Rica.',
            'categorias': ['Tecnología', 'Semiconductores', 'Manufactura Electrónica'],
            'activa': True,
        },
        {
            'nombre': 'FTZ Coca Cola Park',
            'ciudad': 'Alajuela',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/CocaColaPark.png',
            'descripcion': 'Zona franca de la industria de bebidas con logística y distribución.',
            'categorias': ['Industria', 'Logística', 'Distribución'],
            'activa': True,
        },
        {
            'nombre': 'Europlaza Diursa',
            'ciudad': 'Heredia',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/EuroplazaDiursa.jpg',
            'descripcion': 'Parque empresarial para manufactura y servicios.',
            'categorias': ['Manufactura', 'Servicios', 'Empresarial'],
            'activa': True,
        },
        {
            'nombre': 'Zona Franca Metropolitana',
            'ciudad': 'Heredia',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/Metropolitana.jpg',
            'descripcion': 'Zona Franca metropolitana con enfoque industrial y manufacturero.',
            'categorias': ['Industria', 'Empresarial', 'Manufactura'],
            'activa': True,
        },
        {
            'nombre': 'Zona Franca Puntarenas',
            'ciudad': 'Puntarenas',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/ZFPuntarenas.png',
            'descripcion': 'Zona franca en la Pacífico costarricense para logística y exportación.',
            'categorias': ['Logística', 'Industria', 'Exportación'],
            'activa': True,
        },
        {
            'nombre': 'Parque Industrial Zona Franca Alajuela',
            'ciudad': 'Alajuela',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/ZFAlajuela.jpg',
            'descripcion': 'Parque industrial con beneficios tributarios en Alajuela.',
            'categorias': ['Industria', 'Manufactura', 'Empresarial'],
            'activa': True,
        },
        {
            'nombre': 'Almacenes Atalanta',
            'ciudad': 'San José',
            'pais': 'Costa Rica',
            'imagen': 'https://example.com/images/ZFAtlanta.jpg',
            'descripcion': 'Centro de logística y almacenamiento en la capital.',
            'categorias': ['Logística', 'Almacenamiento', 'Distribución'],
            'activa': True,
        },
    ]
    
    for zona in zonas:
        ZonaFranca.objects.create(**zona)


def reverse_seed(apps, schema_editor):
    ZonaFranca = apps.get_model('zonasfrancas', 'ZonaFranca')
    ZonaFranca.objects.all().delete()


class Migration(migrations.Migration):
    dependencies = [
        ('zonasfrancas', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_zonas_francas, reverse_seed),
    ]


from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("""
        <h1>API Hackaton</h1>
        <ul>
            <li><a href="/admin/">Admin</a></li>
            <li><a href="/api/empresas/">Empresas API</a></li>
            <li><a href="/api/pasantes/">Pasantes API</a></li>
            <li><a href="/api/instituciones/">Instituciones API</a></li>
            <li><a href="/api/empleados/">Empleados API</a></li>
        </ul>
    """)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('api/empresas/', include('empresas.urls')),
    path('api/', include('pasantes.urls')),
    path('api/instituciones/', include('instituciones.urls')),
    path('api/empleados/', include('empleados.urls')),
]

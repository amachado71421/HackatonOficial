from django.urls import path
from . import views

urlpatterns = [
    path('', views.EmpresaListCreateView.as_view(), name='empresa-list-create'),
    path('<int:pk>/', views.EmpresaDetailView.as_view(), name='empresa-detail'),
    path('login/', views.LoginView.as_view(), name='login'),
]


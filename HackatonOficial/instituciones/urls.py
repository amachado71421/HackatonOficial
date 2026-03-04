from django.urls import path
from . import views

urlpatterns = [
    path('', views.InstitucionListCreateView.as_view(), name='institucion-list-create'),
    path('<int:pk>/', views.InstitucionDetailView.as_view(), name='institucion-detail'),
    path('login/', views.LoginView.as_view(), name='login'),
]


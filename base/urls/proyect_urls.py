from django.urls import path
from base.views import proyect_views as views
urlpatterns = [
    path("register/", views.createProyect, name="create"),
    path("getproyect/<str:pk>/", views.getProyect, name="get-proyect"),
    path("getproyects/<str:categorie>/", views.getProyects, name="get-proyects"),
    path("update/<str:pk>/", views.updateProyect, name="update-proyect"),
    path("delete/<str:pk>/", views.deleteProyect, name="delete-proyect"),
]
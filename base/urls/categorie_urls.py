from django.urls import path
from base.views import categorie_views as views
urlpatterns = [
    path("register/", views.createCategorie, name="create"),
    path("getcategories/", views.getCategories, name="get-categories"),
    path("getcategorie/<str:pk>/", views.getCategorie, name="get-categorie"),
    path("update/<str:pk>/", views.updateCategorie, name="update-categorie"),
    path("delete/<str:pk>/", views.deleteCategorie, name="delete-categorie"),
]
from django.db import models
from cloudinary.models import CloudinaryField
# Create your models here.


class Categories(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Proyects(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    categorie = models.ForeignKey(
        Categories, blank=True, related_name="categorie", on_delete=models.SET_NULL, null=True)
    img = CloudinaryField('image')
    img2 = CloudinaryField('image')
    def __str__(self):
        return self.name


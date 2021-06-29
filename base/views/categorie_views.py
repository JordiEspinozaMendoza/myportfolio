from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.models import Categories
from base.serializers import CategorieSerializer
from rest_framework import status


@api_view(["GET"])
def getCategories(request):
    try:
        categories= Categories.objects.all()
        serializer = CategorieSerializer(categories, many=True).data
        return Response(serializer, status=status.HTTP_200_OK)
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def getCategorie(request, pk):
    try:
        categorie = Categories.objects.filter(_id=pk)
        serializer = CategorieSerializer(categorie, many=False).data
        return Response(serializer, status=status.HTTP_200_OK)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([IsAdminUser])
def createCategorie(request):
    try:
        data = request.data
        categorie = Categories.objects.create(
            name=data["name"],
        )

        message = "Categoría creada correctamente"
        return Response(message, status=status.HTTP_200_OK)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
@permission_classes([IsAdminUser])
def updateCategorie(request, pk):
    try:
        data = request.data
        categorie = Categories.objects.get(_id=pk)
        categorie.name = data["name"]

        message = "Categoría editada correctamente"
        return Response(message, status=status.HTTP_200_OK)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def deleteCategorie(request, pk):
    try:
        categorie = Categories.objects.get(_id=pk)
        categorie.delete()
        message = "Categoría eliminada correctamente"
        return Response(message, status=status.HTTP_200_OK)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

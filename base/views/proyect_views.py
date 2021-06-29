from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.models import Proyects, Categories
from base.serializers import ProyectSerializer
from rest_framework import status


@api_view(["GET"])
def getProyects(request, categorie):
    try:
        if categorie == "ALL":
            proyects = Proyects.objects.filter(categorie=categorie)
            serializer = ProyectSerializer(proyects, many=True).data
            return Response(serializer)
        else:
            proyects = Proyects.objects.all()
            serializer = ProyectSerializer(proyects, many=True).data
            return Response(serializer, status=status.HTTP_200_OK)
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def getProyect(request, pk):
    try:
        proyect = Proyects.objects.filter(_id=pk)
        serializer = ProyectSerializer(proyect, many=False).data
        return Response(serializer, status=status.HTTP_200_OK)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([IsAdminUser])
def createProyect(request):
    try:
        data = request.data
        proyect = Proyects.objects.create(
            name=data["name"],
            description=data["description"],
            categorie=data["categorie"]
        )
        if data["uploadImg1"]:
            proyect.img = request.FILES.get("img")
        if data["uploadImg2"]:
            proyect.img2 = request.FILES.get("img2")

        proyect.save()
        message = "Proyecto creado correctamente"
        return Response(message, status=status.HTTP_200_OK)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
@permission_classes([IsAdminUser])
def updateProyect(request, pk):
    try:
        data = request.data
        proyect = Proyects.objects.get(_id=pk)
        proyect.name = data["name"]
        proyect.description = data["description"]
        proyect.categorie = Categories.objects.get(_id=data["categorie"])

        if data["uploadImg1"]:
            proyect.img = request.FILES.get("img")
        if data["uploadImg2"]:
            proyect.img2 = request.FILES.get("img2")

        proyect.save()
        message = "Proyecto editado correctamente"
        return Response(message, status=status.HTTP_200_OK)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def deleteProyect(request, pk):
    try:
        proyect = Proyects.objects.get(_id=pk)
        proyect.delete()
        message = "Proyecto eliminado correctamente"
        return Response(message, status=status.HTTP_200_OK)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

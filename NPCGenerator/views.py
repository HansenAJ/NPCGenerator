from django.shortcuts import render

from rest_framework import viewsets
from .serializers import FNameSerializer, LNameSerializer, RaceSerializer
from .models import FName, LName, Race

class FNameViewSet(viewsets.ModelViewSet):
    queryset = FName.objects.all()

    serializer_class = FNameSerializer

class LNameViewSet(viewsets.ModelViewSet):
    queryset = LName.objects.all()

    serializer_class = LNameSerializer

class RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()

    serializer_class = RaceSerializer
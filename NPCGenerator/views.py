from django.shortcuts import render

from rest_framework import viewsets
from .serializers import FNameSerializer, LNameSerializer, RaceSerializer, AllignSerializer, GenderSerializer, ClassTypeSerializer, WeightSerializer
from .models import FName, LName, Race, Allign, Gender, ClassType, Weight

class FNameViewSet(viewsets.ModelViewSet):
    queryset = FName.objects.all()

    serializer_class = FNameSerializer

class LNameViewSet(viewsets.ModelViewSet):
    queryset = LName.objects.all()

    serializer_class = LNameSerializer

class RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()

    serializer_class = RaceSerializer

class AllignViewSet(viewsets.ModelViewSet):
    queryset = Allign.objects.all()

    serializer_class = AllignSerializer

class GenderViewSet(viewsets.ModelViewSet):
    queryset = Gender.objects.all()

    serializer_class = GenderSerializer

class ClassTypeViewSet(viewsets.ModelViewSet):
    queryset = ClassType.objects.all()

    serializer_class = ClassTypeSerializer

class WeightViewSet(viewsets.ModelViewSet):
    queryset = Weight.objects.all()

    serializer_class = WeightSerializer
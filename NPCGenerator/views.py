from django.shortcuts import render

from rest_framework import viewsets
from .serializers import LevelSerializer, PhysTraitSerializer, SocTraitSerializer, FNameSerializer, LNameSerializer, RaceSerializer, AllignmentSerializer, GenderSerializer, ClassTypeSerializer, WeightSerializer, HeightSerializer, WeaponSerializer
from .models import Level, PhysTrait, SocTrait, FName, LName, Race, Allignment, Gender, ClassType, Weight, Height, Weapon


class LevelViewSet(viewsets.ModelViewSet):
    queryset = Level.objects.all()

    serializer_class = LevelSerializer

class PhysTraitViewSet(viewsets.ModelViewSet):
    queryset = PhysTrait.objects.all()

    serializer_class = PhysTraitSerializer

class SocTraitViewSet(viewsets.ModelViewSet):
    queryset = SocTrait.objects.all()

    serializer_class = SocTraitSerializer

class FNameViewSet(viewsets.ModelViewSet):
    queryset = FName.objects.all()

    serializer_class = FNameSerializer

class LNameViewSet(viewsets.ModelViewSet):
    queryset = LName.objects.all()

    serializer_class = LNameSerializer

class RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()

    serializer_class = RaceSerializer

class AllignmentViewSet(viewsets.ModelViewSet):
    queryset = Allignment.objects.all()

    serializer_class = AllignmentSerializer

class GenderViewSet(viewsets.ModelViewSet):
    queryset = Gender.objects.all()

    serializer_class = GenderSerializer

class ClassTypeViewSet(viewsets.ModelViewSet):
    queryset = ClassType.objects.all()

    serializer_class = ClassTypeSerializer

class WeightViewSet(viewsets.ModelViewSet):
    queryset = Weight.objects.all()

    serializer_class = WeightSerializer

class HeightViewSet(viewsets.ModelViewSet):
    queryset = Height.objects.all()

    serializer_class = HeightSerializer

class WeaponViewSet(viewsets.ModelViewSet):
    queryset = Weapon.objects.all()

    serializer_class = WeaponSerializer
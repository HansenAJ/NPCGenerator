from rest_framework import serializers    
from .models import Level, PhysTrait, SocTrait, FName, LName, Race, Allignment, Gender, ClassType, Weight, Height, Weapon


class LevelSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Level
        fields = [
            'level'
        ]

class SocTraitSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = SocTrait
        fields = [
            'soctrait'
        ]

class PhysTraitSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = PhysTrait
        fields = [
            'phystrait'
        ]

class FNameSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = FName
        fields = [
            'fname'
        ]

class LNameSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = LName
        fields = [
            'lname'
        ]

class RaceSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Race
        fields = [
            'race'
        ]

class AllignmentSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Allignment
        fields = [
            'allignment'
        ]

class GenderSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Gender
        fields = [
            'gender'
        ]

class ClassTypeSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = ClassType
        fields = [
            'classtype'
        ]

class WeightSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Weight
        fields = [
            'weight'
        ]

class HeightSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Height
        fields = [
            'height'
        ]

class WeaponSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Weapon
        fields = [
            'weapon'
        ]

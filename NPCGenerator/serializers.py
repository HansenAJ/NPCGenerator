from rest_framework import serializers    
from .models import Level, PhysTrait, SocTrait, FName, LName, Race, Allignment, Gender, ClassType, Weight, Height, Weapon


class LevelSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Level
        fields = [
            'level',
            'id'
        ]

class SocTraitSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = SocTrait
        fields = [
            'soctrait',
            'id'
        ]

class PhysTraitSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = PhysTrait
        fields = [
            'phystrait',
            'id'
        ]

class FNameSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = FName
        fields = [
            'fname',
            'id'
        ]

class LNameSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = LName
        fields = [
            'lname',
            'id'
        ]

class RaceSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Race
        fields = [
            'race',
            'id'
        ]

class AllignmentSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Allignment
        fields = [
            'allignment',
            'id'
        ]

class GenderSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Gender
        fields = [
            'gender',
            'id'
        ]

class ClassTypeSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = ClassType
        fields = [
            'classtype',
            'id'
        ]

class WeightSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Weight
        fields = [
            'weight',
            'id'
        ]

class HeightSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Height
        fields = [
            'height',
            'id'
        ]

class WeaponSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Weapon
        fields = [
            'weapon',
            'id'
        ]

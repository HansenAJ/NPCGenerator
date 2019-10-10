from rest_framework import serializers    
from .models import GetAll, FName, LName, Race, Allign, Gender, ClassType, Weight, Height, Weapon



class GetAllSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = FName
        fields = [
            'fname'
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

class AllignSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Allign
        fields = [
            'allign'
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

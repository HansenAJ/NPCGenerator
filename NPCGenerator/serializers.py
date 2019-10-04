from rest_framework import serializers    
from .models import FName, LName, Race, Allign, Gender, ClassType, Weight
     
class FNameSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = FName
        fields = [
            'name'
        ]

class LNameSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = LName
        fields = [
            'name'
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
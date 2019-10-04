from rest_framework import serializers    
from .models import FName, LName, Race
     
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


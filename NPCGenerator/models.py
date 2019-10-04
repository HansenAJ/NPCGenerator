from django.db import models

class FName(models.Model):
    name = models.CharField(max_length=20)

class LName(models.Model):
    name = models.CharField(max_length=20)

class Race(models.Model):
    race = models.CharField(max_length=20)

class Allign(models.Model):
    allign = models.CharField(max_length=20)

class Gender(models.Model):
    gender = models.CharField(max_length=20)

class ClassType(models.Model):
    classtype = models.CharField(max_length=20)

class Weight(models.Model):
    weight = models.CharField(max_length=20)
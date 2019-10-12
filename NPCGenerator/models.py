from django.db import models

class FName(models.Model):
    fname = models.CharField(max_length=20)

class LName(models.Model):
    lname = models.CharField(max_length=30)

class Race(models.Model):
    race = models.CharField(max_length=20)

class Allignment(models.Model):
    allignment = models.CharField(max_length=20)

class Gender(models.Model):
    gender = models.CharField(max_length=20)

class ClassType(models.Model):
    classtype = models.CharField(max_length=30)

class Weight(models.Model):
    weight = models.CharField(max_length=20)

class Height(models.Model):
    height = models.CharField(max_length=20)

class Weapon(models.Model):
    weapon = models.CharField(max_length=20)

class SocTrait(models.Model):
    soctrait = models.CharField(max_length=35)

class PhysTrait(models.Model):
    phystrait = models.CharField(max_length=35)

class Level(models.Model):
    level = models.CharField(max_length=20)



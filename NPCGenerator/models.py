from django.db import models

class FName(models.Model):
    name = models.CharField(max_length=20)

class LName(models.Model):
    name = models.CharField(max_length=20)

class Race(models.Model):
    race = models.CharField(max_length=20)

class Allign(models.Model):
    allign = models.CharField(max_length=20)
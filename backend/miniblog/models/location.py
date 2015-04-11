from django.db import models

from djangotoolbox.fields import EmbeddedModelField


class Point(models.Model):
    lat = models.FloatField()
    lon = models.FloatField()


class Location(models.Model):
    point = EmbeddedModelField('Point')
    name = models.CharField(max_length=90)
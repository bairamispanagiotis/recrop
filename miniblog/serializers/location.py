from rest_framework import serializers
from ..models import Point, Location


class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point


class LocationSerializer(serializers.ModelSerializer):
    point = PointSerializer()

    class Meta:
        model = Location

        exclude = ('id', )
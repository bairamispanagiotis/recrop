from rest_framework import viewsets

from ..serializers import LocationSerializer, PointSerializer
from ..models import Location, Point


class PointViewSet(viewsets.ModelViewSet):
    serializer_class = PointSerializer
    queryset = Point.objects.all()


class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()
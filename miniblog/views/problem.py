from rest_framework import viewsets

from ..serializers import ProblemSerializer, DiseaseSerializer, PestSerializer
from ..models import Problem, Disease, Pest


class ProblemViewSet(viewsets.ModelViewSet):
    serializer_class = ProblemSerializer
    queryset = Problem.objects.all()


class DiseaseViewSet(viewsets.ModelViewSet):
    serializer_class = DiseaseSerializer
    queryset = Disease.objects.all()


class PestViewSet(viewsets.ModelViewSet):
    serializer_class = PestSerializer
    queryset = Pest.objects.all()
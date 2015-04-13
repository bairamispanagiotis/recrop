from rest_framework import viewsets

from ..serializers import ProblemDetailsSerializer
from ..models import Problem


class ProblemViewSet(viewsets.ModelViewSet):
    serializer_class = ProblemDetailsSerializer
    queryset = Problem.objects.all()
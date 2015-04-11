from rest_framework import viewsets

from ..serializers import ProblemSerializer
from ..models import Problem


class ProblemViewSet(viewsets.ModelViewSet):
    serializer_class = ProblemSerializer
    queryset = Problem.objects.all()
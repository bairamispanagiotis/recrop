from rest_framework import viewsets

from ..serializers import ProblemLogSerializer, HarvestLogSerializer
from ..models import ProblemLog, HarvestLog


class ProblemLogViewSet(viewsets.ModelViewSet):
    serializer_class = ProblemLogSerializer
    queryset = ProblemLog.objects.all()


class HarvestLogViewSet(viewsets.ModelViewSet):
    serializer_class = HarvestLogSerializer
    queryset = HarvestLog.objects.all()
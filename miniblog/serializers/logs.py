from rest_framework import serializers

from ..models import ProblemLog, HarvestLog
from .problem import ProblemSerializer


class ProblemLogSerializer(serializers.ModelSerializer):
    issue = ProblemSerializer(read_only=True, source='problem')

    class Meta:
        model = ProblemLog
        exclude = ('id', )


class HarvestLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = HarvestLog
        exclude = ('id', )
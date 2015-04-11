from rest_framework import serializers

from ..models import ProblemLog, HarvestLog


class ProblemLogSerializer(serializers.ModelSerializer):
    problem_id = serializers.CharField(source='problem.id')

    class Meta:
        model = ProblemLog
        exclude = ('id', )


class HarvestLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = HarvestLog
        exclude = ('id', )
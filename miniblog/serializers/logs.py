from rest_framework import serializers

from ..models import ProblemLog, HarvestLog


class ProblemLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemLog


class HarvestLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = HarvestLog
        exclude = ('id', )
from rest_framework import serializers
from ..models import Problem, Disease, Pest


class ProblemSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Problem


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease


class PestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pest
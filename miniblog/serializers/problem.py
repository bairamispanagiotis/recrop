from rest_framework import serializers
from ..models import Problem, Disease, Pest


class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease


class PestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pest
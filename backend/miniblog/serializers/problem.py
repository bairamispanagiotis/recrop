from rest_framework import serializers
from ..models import Problem


class ProblemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Problem
        exclude = ('id', )


class ProblemDetailsSerializer(serializers.ModelSerializer):
    id = serializers.CharField()

    class Meta:
        model = Problem
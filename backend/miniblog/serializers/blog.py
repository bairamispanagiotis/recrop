from rest_framework import serializers
from ..models import Comment, Post, Location, HarvestLog, ProblemLog

from .logs import HarvestLogSerializer, ProblemLogSerializer
from .location import LocationSerializer
from .users import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        exclude = ('id', )


class PostSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    harvest = HarvestLogSerializer()
    location = LocationSerializer()

    problem = ProblemLogSerializer(many=True)
    comments = CommentSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Post

    def create(self, validated_data):
        request = self.context['request']

        validated_data['location'] = Location(**validated_data['location'])
        validated_data['harvest'] = HarvestLog(**validated_data['harvest'])
        validated_data['user'] = request.user

        problems = []
        for problem in validated_data['problem']:
            problems.append(ProblemLog(**problem))
        validated_data['problem'] = problems

        if len(problems) == 0:
            validated_data['problem'] = None

        post = Post.objects.create(**validated_data)

        return post

    def update(self, instance, validated_data):
        return super(PostSerializer, self).update(instance, validated_data)
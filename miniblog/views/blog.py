from rest_framework import viewsets
from ..serializers import CommentSerializer, PostSerializer
from ..models import Comment, Post


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
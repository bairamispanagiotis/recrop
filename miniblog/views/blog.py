from rest_framework import viewsets, decorators
from rest_framework.response import Response
from datetime import datetime
from ..serializers import CommentSerializer, PostSerializer
from ..models import Comment, Post


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    @decorators.detail_route(methods=['post', 'get'])
    def comment(self, request, pk=None):
        post = self.get_object()

        data = request.data
        data['user'] = request.user

        now = datetime.now()
        data['created'] = now

        comment = Comment(**data)

        post.comments.append(comment)
        post.save()

        return Response(self.get_serializer_class()(post, context={'request': request}).data)
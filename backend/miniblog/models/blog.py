from django.db import models
from django.contrib.auth.models import User

from djangotoolbox.fields import ListField, EmbeddedModelField


class Comment(models.Model):
    user = models.ForeignKey(User, related_name='comments')

    created = models.DateTimeField()

    text = models.TextField()


class Post(models.Model):
    user = models.ForeignKey(User, related_name='posts')

    created = models.DateTimeField()
    updated = models.DateTimeField()

    harvest = EmbeddedModelField('HarvestLog')
    location = EmbeddedModelField('Location')
    problem = ListField(EmbeddedModelField('ProblemLog'))
    comments = ListField(EmbeddedModelField('Comment'))
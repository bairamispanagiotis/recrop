from django.db import models


class Problem(models.Model):
    name = models.CharField(max_length=64)
    type = models.CharField(max_length=64)

from django.db import models

from .problem import Problem


class ProblemLog(models.Model):
    date = models.DateTimeField()
    affected = models.IntegerField()
    problem = models.ForeignKey(Problem, related_name='logs')


class HarvestLog(models.Model):
    date = models.DateTimeField()
    affected = models.IntegerField()
from django.db import models


class Problem(models.Model):
    name = models.CharField(max_length=64)


class Disease(Problem):
    pass


class Pest(Problem):
    pass
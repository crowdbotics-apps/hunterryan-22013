from django.conf import settings
from django.db import models


class Stats(models.Model):
    "Generated Model"
    part = models.CharField(
        max_length=20,
    )
    difm = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )
    nsn = models.CharField(
        max_length=13,
        null=True,
        blank=True,
    )
    partNumber = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    errcCode = models.CharField(
        max_length=3,
        null=True,
        blank=True,
    )
    price = models.CharField(
        max_length=20,
        null=True,
        blank=True,
    )
    to = models.CharField(
        max_length=30,
        null=True,
        blank=True,
    )


# Create your models here.

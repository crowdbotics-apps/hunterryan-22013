from django.conf import settings
from django.db import models


class Stats(models.Model):
    "Generated Model"
    part = models.CharField(
        max_length=20,
    )
    difm = models.CharField(
        null=True,
        blank=True,
        max_length=256,
    )
    nsn = models.CharField(
        null=True,
        blank=True,
        max_length=13,
    )
    partNumber = models.CharField(
        null=True,
        blank=True,
        max_length=100,
    )
    errcCode = models.CharField(
        null=True,
        blank=True,
        max_length=3,
    )
    price = models.CharField(
        null=True,
        blank=True,
        max_length=20,
    )
    to = models.CharField(
        null=True,
        blank=True,
        max_length=30,
    )


# Create your models here.

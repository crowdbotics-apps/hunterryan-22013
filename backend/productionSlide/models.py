from django.conf import settings
from django.db import models


class Production(models.Model):
    "Generated Model"
    bin = models.CharField(
        max_length=5,
    )
    noun = models.CharField(
        max_length=20,
        null=True,
        blank=True,
    )
    orgshop = models.CharField(
        max_length=10,
        null=True,
        blank=True,
    )
    status = models.CharField(
        max_length=3,
        null=True,
        blank=True,
    )
    notes = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )


# Create your models here.

from django.conf import settings
from django.db import models


class Noun(models.Model):
    "Generated Model"
    status = models.CharField(
        max_length=3,
    )
    orgshop = models.CharField(
        max_length=25,
    )
    micap = models.BooleanField()
    datein = models.DateField()
    dateout = models.DateField()
    awp = models.ForeignKey(
        "home.CustomText",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="noun_awp",
    )


class Columns(models.Model):
    "Generated Model"
    bin = models.CharField(
        max_length=3,
    )
    noun = models.CharField(
        null=True,
        blank=True,
        max_length=100,
    )
    orgshop = models.CharField(
        null=True,
        blank=True,
        max_length=10,
    )
    status = models.CharField(
        null=True,
        blank=True,
        max_length=3,
    )
    notes = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )


# Create your models here.

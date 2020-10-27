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
        max_length=100,
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


# Create your models here.

from django.conf import settings
from django.db import models


class Production(models.Model):
    "Generated Model"
    bin = models.CharField(
        max_length=5,
    )
    noun = models.CharField(
        null=True,
        blank=True,
        max_length=20,
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
        null=True,
        blank=True,
        max_length=100,
    )
    discrepancy = models.CharField(
        null=True,
        blank=True,
        max_length=15,
    )
    dateIn = models.DateField(
        null=True,
        blank=True,
    )
    initiateDate = models.DateField(
        null=True,
        blank=True,
    )
    documentnumber = models.CharField(
        null=True,
        blank=True,
        max_length=14,
    )
    dueOutParts = models.CharField(
        null=True,
        blank=True,
        max_length=50,
    )


# Create your models here.

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
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="noun_awp",
    )


# Create your models here.

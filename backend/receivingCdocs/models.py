from django.conf import settings
from django.db import models


class Cdocs(models.Model):
    "Generated Model"
    bins = models.ForeignKey(
        "hydrostat.Columns",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="cdocs_bins",
    )


# Create your models here.

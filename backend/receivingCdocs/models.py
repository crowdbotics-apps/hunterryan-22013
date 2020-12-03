from django.conf import settings
from django.db import models


class Cdocs(models.Model):
    "Generated Model"
    bins = models.ForeignKey(
        "hydrostat.Columns",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="cdocs_bins",
    )
    documentnumber = models.ForeignKey(
        "hydrostat.Columns",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="cdocs_documentnumber",
    )
        
# Create your models here.

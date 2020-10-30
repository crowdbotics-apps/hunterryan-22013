from django.conf import settings
from django.db import models


class Jdocs(models.Model):
    "Generated Model"
    bins = models.ForeignKey(
        "hydrostat.Columns",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="jdocs_bins",
    )
    documentnumber = models.ForeignKey(
        "hydrostat.Columns",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="jdocs_documentnumber",
    )


# Create your models here.

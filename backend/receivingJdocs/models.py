from django.conf import settings
from django.db import models


class Jdocs(models.Model):
    "Generated Model"
    bins = models.ForeignKey(
        "hydrostat.Columns",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="jdocs_bins",
    )
    documentnumber = models.ForeignKey(
        "hydrostat.Columns",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="jdocs_documentnumber",
    )


# Create your models here.

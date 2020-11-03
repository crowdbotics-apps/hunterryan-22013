from django.conf import settings
from django.db import models


class AllOurParts(models.Model):
    "Generated Model"
    a10brake = models.ForeignKey(
        "hydrostat.Columns",
        on_delete=models.CASCADE,
        related_name="allourparts_a10brake",
    )
    a10NLGuplockAct = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )


# Create your models here.

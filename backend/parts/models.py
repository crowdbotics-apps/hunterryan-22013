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
        null=True,
        blank=True,
        max_length=256,
    )
    a10slatact = models.URLField(
        max_length=256,
        null=True,
        blank=True,
    )
    a10rudderact = models.URLField(
        null=True,
        blank=True,
    )
    a10elevatoract = models.URLField(
        null=True,
        blank=True,
    )


# Create your models here.

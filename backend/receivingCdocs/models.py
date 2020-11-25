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
    file = models.FileField(blank=True, null=True)
    
    def __str__(self):
        return self.file.name
        
# Create your models here.

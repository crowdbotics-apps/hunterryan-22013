from django.conf import settings
from django.db import models


class Stats(models.Model):
    "Generated Model"
    part = models.CharField(
        max_length=20,
    )


# Create your models here.

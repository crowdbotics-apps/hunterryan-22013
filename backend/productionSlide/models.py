from django.conf import settings
from django.db import models


class Production(models.Model):
    "Generated Model"
    bin = models.CharField(
        max_length=5,
    )


# Create your models here.

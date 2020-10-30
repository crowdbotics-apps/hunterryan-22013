from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )
    code = models.CharField(
        null=True,
        blank=True,
        max_length=1,
    )
    incomingserialnumber = models.CharField(
        null=True,
        blank=True,
        max_length=20,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Status(models.Model):
    "Generated Model"
    awp = models.ForeignKey(
        "hydrostat.Noun",
        on_delete=models.CASCADE,
        related_name="status_awp",
    )
    awt = models.ForeignKey(
        "hydrostat.Noun",
        on_delete=models.CASCADE,
        related_name="status_awt",
    )
    inw = models.ForeignKey(
        "hydrostat.Noun",
        on_delete=models.CASCADE,
        related_name="status_inw",
    )

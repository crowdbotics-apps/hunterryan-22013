# Generated by Django 2.2.16 on 2020-11-18 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("parts", "0013_auto_20201118_1821"),
    ]

    operations = [
        migrations.AddField(
            model_name="allourparts",
            name="f16mainretactblk25103",
            field=models.URLField(blank=True, null=True),
        ),
    ]

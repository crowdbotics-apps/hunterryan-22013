# Generated by Django 2.2.16 on 2020-11-04 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("parts", "0009_auto_20201104_2109"),
    ]

    operations = [
        migrations.AddField(
            model_name="allourparts",
            name="f15nlgact",
            field=models.URLField(blank=True, null=True),
        ),
    ]

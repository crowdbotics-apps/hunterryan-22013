# Generated by Django 2.2.16 on 2020-11-04 02:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0008_customtext_a10slatact"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="customtext",
            name="a10slatAct",
        ),
    ]

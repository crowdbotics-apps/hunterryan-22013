# Generated by Django 2.2.16 on 2020-11-10 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("yearlyStats", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="stats",
            name="difm",
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
        migrations.AddField(
            model_name="stats",
            name="errcCode",
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
        migrations.AddField(
            model_name="stats",
            name="nsn",
            field=models.CharField(blank=True, max_length=13, null=True),
        ),
        migrations.AddField(
            model_name="stats",
            name="partNumber",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="stats",
            name="price",
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name="stats",
            name="to",
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]

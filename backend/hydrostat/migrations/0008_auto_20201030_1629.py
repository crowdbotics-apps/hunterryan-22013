# Generated by Django 2.2.16 on 2020-10-30 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("hydrostat", "0007_columns_code"),
    ]

    operations = [
        migrations.AddField(
            model_name="columns",
            name="incomingserialnumber",
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name="columns",
            name="jobcontrolnumber",
            field=models.CharField(blank=True, max_length=9, null=True),
        ),
    ]

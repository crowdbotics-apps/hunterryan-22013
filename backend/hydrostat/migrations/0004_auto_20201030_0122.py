# Generated by Django 2.2.16 on 2020-10-30 01:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hydrostat', '0003_columns_notes'),
    ]

    operations = [
        migrations.AddField(
            model_name='columns',
            name='discrepacies',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='columns',
            name='micap',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]

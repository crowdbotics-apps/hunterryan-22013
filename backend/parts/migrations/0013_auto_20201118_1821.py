# Generated by Django 2.2.16 on 2020-11-18 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parts', '0012_allourparts_f16dwnlock107'),
    ]

    operations = [
        migrations.AddField(
            model_name='allourparts',
            name='f16jfsdooract',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='allourparts',
            name='f16mainretactblk25',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]

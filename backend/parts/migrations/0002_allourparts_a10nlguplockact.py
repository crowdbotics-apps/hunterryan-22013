# Generated by Django 2.2.16 on 2020-11-03 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='allourparts',
            name='a10NLGuplockAct',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]

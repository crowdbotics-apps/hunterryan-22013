# Generated by Django 2.2.16 on 2020-10-30 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hydrostat', '0006_auto_20201030_0129'),
    ]

    operations = [
        migrations.AddField(
            model_name='columns',
            name='code',
            field=models.CharField(blank=True, max_length=1, null=True),
        ),
    ]

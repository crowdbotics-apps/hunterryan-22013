# Generated by Django 2.2.16 on 2020-11-25 22:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('receivingJdocs', '0002_auto_20201030_1625'),
    ]

    operations = [
        migrations.AddField(
            model_name='jdocs',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
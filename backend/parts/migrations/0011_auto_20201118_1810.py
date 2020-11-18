# Generated by Django 2.2.16 on 2020-11-18 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("parts", "0010_allourparts_f15nlgact"),
    ]

    operations = [
        migrations.AddField(
            model_name="allourparts",
            name="f16ARDOORACT",
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="allourparts",
            name="f16DWNLOCK105",
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="allourparts",
            name="f16FCA",
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="allourparts",
            name="f16JFS",
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="allourparts",
            name="f16RESACCUM",
            field=models.URLField(blank=True, null=True),
        ),
    ]

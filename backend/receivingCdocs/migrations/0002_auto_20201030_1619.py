# Generated by Django 2.2.16 on 2020-10-30 16:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hydrostat', '0006_auto_20201030_0129'),
        ('receivingCdocs', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cdocs',
            name='bin',
        ),
        migrations.AddField(
            model_name='cdocs',
            name='bins',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cdocs_bins', to='hydrostat.Columns'),
        ),
    ]

# Generated by Django 2.2.16 on 2020-10-30 16:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hydrostat', '0010_auto_20201030_1635'),
        ('home', '0005_auto_20201030_0130'),
    ]

    operations = [
        migrations.AddField(
            model_name='customtext',
            name='a10NLGuplockact',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customtext_a10NLGuplockact', to='hydrostat.Columns'),
        ),
    ]

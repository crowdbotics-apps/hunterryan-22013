# Generated by Django 2.2.16 on 2020-10-27 16:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0003_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='Noun',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=3)),
                ('orgshop', models.CharField(max_length=25)),
                ('micap', models.BooleanField()),
                ('datein', models.DateField()),
                ('dateout', models.DateField()),
                ('awp', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='noun_awp', to='home.CustomText')),
            ],
        ),
    ]

# Generated by Django 3.2 on 2021-07-10 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyects',
            name='linkDemo',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='proyects',
            name='linkGithub',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]

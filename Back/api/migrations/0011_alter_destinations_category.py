# Generated by Django 4.1.3 on 2023-01-19 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_package'),
    ]

    operations = [
        migrations.AlterField(
            model_name='destinations',
            name='category',
            field=models.CharField(choices=[('CAFE-RESTO', 'Cafe-Resto'), ('GYM', 'Gym'), ('PARK', 'Park'), ('SITE HISTORIQUE', 'Site historique'), ('HOTEL', 'Hotel'), ('BAR', 'Bar')], max_length=20),
        ),
    ]

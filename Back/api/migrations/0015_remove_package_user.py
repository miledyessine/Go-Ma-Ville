# Generated by Django 4.1.3 on 2023-01-20 13:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_transport'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='package',
            name='user',
        ),
    ]

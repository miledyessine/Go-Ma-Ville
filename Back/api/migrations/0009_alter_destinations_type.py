# Generated by Django 4.1.3 on 2023-01-17 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_destinations_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='destinations',
            name='type',
            field=models.CharField(choices=[('Open', 'OPEN'), ('Closed', 'CLOSED')], default='Open', max_length=10),
        ),
    ]

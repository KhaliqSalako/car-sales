# Generated by Django 4.0.3 on 2023-01-24 02:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='salesrecord',
            old_name='sales_person',
            new_name='salesperson',
        ),
    ]

# Generated by Django 4.0.3 on 2023-01-24 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_alter_potentialcustomer_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='price',
            field=models.CharField(max_length=255),
        ),
    ]

# Generated by Django 2.1.11 on 2019-10-04 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NPCGenerator', '0009_auto_20191004_1623'),
    ]

    operations = [
        migrations.CreateModel(
            name='Weight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.CharField(max_length=20)),
            ],
        ),
    ]

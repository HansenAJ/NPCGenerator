# Generated by Django 2.1.11 on 2019-10-04 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NPCGenerator', '0011_height'),
    ]

    operations = [
        migrations.CreateModel(
            name='Weapon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weapon', models.CharField(max_length=20)),
            ],
        ),
    ]

# Generated by Django 2.1.11 on 2019-10-04 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NPCGenerator', '0003_lname'),
    ]

    operations = [
        migrations.CreateModel(
            name='Race',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Race', models.CharField(max_length=20)),
            ],
        ),
    ]
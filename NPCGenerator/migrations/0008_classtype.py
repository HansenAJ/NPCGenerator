# Generated by Django 2.1.11 on 2019-10-04 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NPCGenerator', '0007_auto_20191004_1617'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClassType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ClassType', models.CharField(max_length=20)),
            ],
        ),
    ]
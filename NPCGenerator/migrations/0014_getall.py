# Generated by Django 2.1.11 on 2019-10-10 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NPCGenerator', '0013_auto_20191009_1659'),
    ]

    operations = [
        migrations.CreateModel(
            name='GetAll',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=20)),
                ('lname', models.CharField(max_length=20)),
            ],
        ),
    ]
# Generated by Django 2.1.11 on 2019-10-09 16:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('NPCGenerator', '0012_weapon'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fname',
            old_name='name',
            new_name='fname',
        ),
        migrations.RenameField(
            model_name='lname',
            old_name='name',
            new_name='lname',
        ),
    ]

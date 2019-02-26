# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-02-05 17:56
from __future__ import unicode_literals

from django.db import migrations, models
from django.template.defaultfilters import slugify

def sluggify_all_categories(apps, schema_editor):
    Category = apps.get_model("buyersguide", "BuyersGuideProductCategory")
    for cat in Category.objects.all():
        cat.slug = slugify(cat.name)
        cat.save()

class Migration(migrations.Migration):

    dependencies = [
        ('buyersguide', '0019_auto_20190131_2039'),
    ]

    operations = [
        migrations.AddField(
            model_name='buyersguideproductcategory',
            name='slug',
            field=models.SlugField(blank=True, help_text='A URL-friendly version of the product name. This is an auto-generated field.'),
        ),
        migrations.RunPython(sluggify_all_categories, migrations.RunPython.noop),
    ]
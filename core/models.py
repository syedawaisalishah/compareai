from django.db import models

# Create your models here.
class truckprices(models.Model):
    year=models.CharField(max_length=100)
    make=models.CharField(max_length=100)
    model=models.CharField(max_length=100)
    features=models.TextField(max_length=100)
    product=models.CharField(max_length=100)
    content=models.TextField(null=True, blank=True)
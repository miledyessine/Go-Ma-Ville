from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

open_close = (('Open', 'OPEN'), ('Close', 'CLOSE'))


class Destinations(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    description = models.CharField(max_length=300)
    date = models.DateField()
    class Category_choices(models.TextChoices):
        CAFERESTO = "CAFE-RESTO", ("Cafe-Resto")
        GYM = "GYM", ("Gym")
        PARK = "PARK", ("Park")
        SITEHISTORIQUE = "SITE HISTORIQUE", ("Site historique")
        HOTEL = "HOTEL", ("Hotel")
        BAR = "BAR", ("Bar")
    category = models.CharField(
        max_length=20, choices=Category_choices.choices)
    stars = models.FloatField()
    type = models.CharField(max_length=10, choices=open_close, default='Open')

    cover = models.ImageField(
        upload_to='images/', null=False, blank=False, default=None)

    def get_cover_url(self):
        if self.cover and hasattr(self.cover, 'url'):
            return self.cover.url
        return None


class Users(models.Model):
    username = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    user = models.OneToOneField(User, on_delete=models.CASCADE)


status_choice = (('approved', 'APPROVED'), ('pending',
                 'PENDING'), ('rejected'), ('REJECTED'))


class Taxi (models.Model):
    nom_taxi = models.TextField()
    num_taxi = models.IntegerField()
    numero = models.IntegerField()


class Package (models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE,null=True)
    restaurant = models.CharField(max_length=200)
    park = models.CharField(max_length=200)
    sitehistorique = models.CharField(max_length=200)
    bar = models.CharField(max_length=200)


class Transport(models.Model):
    name = models.CharField(max_length=100)
    AVAILABILITY_CHOICES = [('Available', 'Available'),
                            ('Unavailable', 'Unavailable'), ]
    availability = models.CharField(
        max_length=20, choices=AVAILABILITY_CHOICES, default='Available')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    link = models.URLField()
    location = models.CharField(max_length=100)
    cover = models.ImageField(
        upload_to='images/', null=False, blank=False, default=None)
    map_link = models.URLField()


class reviews(models.Model):
    status = models.CharField(max_length=10,  default='pending')
    users = models.ForeignKey(Users, on_delete=models.CASCADE)
    destinations = models.ForeignKey(Destinations, on_delete=models.CASCADE)
    stars = models.IntegerField()
    comment = models.TextField()
    date = models.DateTimeField()

    def init(self, args, **kwargs):
        super().init(args, **kwargs)

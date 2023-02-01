from django.contrib import admin

# Register your models here.

from .models import Destinations,Users,reviews,Taxi,Package,Transport

admin.site.register(Destinations)
admin.site.register(Users)
admin.site.register(reviews)
admin.site.register(Taxi)
admin.site.register(Package)
admin.site.register(Transport)
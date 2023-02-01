from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from .models import Destinations, Users, reviews, Taxi, Package, Transport
from .serializers import Destinations
from .serializers import Users
from .serializers import reviews
from .serializers import Taxi
from .serializers import Package
from .serializers import Transport
from rest_framework.fields import SerializerMethodField


class DestinationSerializer(ModelSerializer):
    class Meta:
        model = Destinations
        fields = '__all__'


class PackageSerializer(ModelSerializer):
    class Meta:
        model = Package
        fields = '__all__'


class UserSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


class reviewsSerializer(ModelSerializer):
    class Meta:
        model = reviews
        fields = '__all__'


class TaxiSerializer(ModelSerializer):
    class Meta:
        model = Taxi
        fields = '__all__'


class TransportSerializer(ModelSerializer):
    class Meta:
        model = Transport
        fields = '__all__'

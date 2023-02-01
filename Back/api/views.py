from .models import Destinations, Users, Taxi, Package, Transport
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
import json
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import DestinationSerializer, UserSerializer, TaxiSerializer, PackageSerializer, TransportSerializer
from rest_framework.authentication import TokenAuthentication


class DestinationViewSet(viewsets.ModelViewSet):
    serializer_class = DestinationSerializer
    queryset = Destinations.objects.all()

    @action(detail=False, methods=['POST'], url_path=r'getid',)
    def get_id(self, request):
        idd = request.data["id"]
        destinations = Destinations.objects.filter(id=idd)
        desseriadlizer = DestinationSerializer(
            destinations, many=True, context={'request': request})
        return Response(desseriadlizer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['GET'], url_path=r'get_all',)
    def get_all(self, request):
        destinations = Destinations.objects.all()
        serializer = DestinationSerializer(
            destinations, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = Users.objects.all()

    @action(detail=False, methods=['POST'], url_path=r'verif_user',)
    def verif_user(self, request):
        print(request.body)
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        new = Users()
        newUser = User()
        new.city = body["city"]
        new.username = body["username"]
        newUser.email = body["email"]
        newUser.password = body["password"]
        newUser.username = body["username"]
        newUser.save()
        new.user = newUser
        new.save()
        token = Token.objects.create(user=newUser)
        token.save()
        print(token)

        return Response({'usertoken': token.key}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['POST'], url_path=r'verif_user_login',)
    def verif_user_login(self, request):

        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        print(username)
        print(password)
        try:
            user = User.objects.get(username=username, password=password)
        except User.DoesNotExist:
            user = None
        print(user)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            print(token)
            return Response({
                'usertoken': token.key,
                'user_id': user.pk,
                'name': user.username,
            })
        else:
            return Response(None)


class TaxiViewSet(viewsets.ModelViewSet):
    serializer_class = TaxiSerializer
    queryset = Taxi.objects.all()

    @action(detail=False, methods=['GET'], url_path=r'get_taxi',)
    def get_taxi(self, request):
        taxis = Taxi.objects.all()
        TaxiSerializerr = TaxiSerializer(
            taxis, many=True, context={'request': request})
        return Response(TaxiSerializerr.data, status=status.HTTP_200_OK)


class PackageViewSet(viewsets.ModelViewSet):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    from rest_framework.authentication import TokenAuthentication
    authentication_classes = (TokenAuthentication,)

    @action(detail=False, methods=['PUT'], url_path=r'add_package',)
    def add_package(self, request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        user = Users.objects.get(user=request.user)
        rest = body["restaurant"]
        park = body["park"]
        history = body["sitehistorique"]
        bar = body["bar"]
        try:
            existing_package = Package.objects.get(
                user=user, restaurant=rest, park=park, sitehistorique=history, bar=bar)
        except Package.DoesNotExist:
            new_package = Package(user=user, restaurant=rest,
                                  park=park, sitehistorique=history, bar=bar)
            new_package.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_409_CONFLICT)

    @action(detail=False, methods=['GET'], url_path=r'get_package',)
    def get_package(self, request):
        user = Users.objects.get(user=request.user)
        package = Package.objects.filter(user=user)
        serializer = PackageSerializer(package, many=True)
        return Response(serializer.data)


class TransportViewSet(viewsets.ModelViewSet):
    serializer_class = TransportSerializer
    queryset = Transport.objects.all()

    @action(detail=False, methods=['GET'], url_path=r'getalltransport',)
    def getalltransport(self, request):
        transport = Transport.objects.all()
        transseriadlizer = TransportSerializer(
            transport, many=True, context={'request': request})
        return Response(transseriadlizer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['POST'], url_path=r'get_trans_id',)
    def get_trans_id(self, request):
        print(request.data)
        idd = request.data["id"]
        transport = Transport.objects.filter(id=idd)
        transseriadlizer = TransportSerializer(
            transport, many=True, context={'request': request})
        return Response(transseriadlizer.data, status=status.HTTP_200_OK)

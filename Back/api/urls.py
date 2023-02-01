from .views import DestinationViewSet ,UserViewSet,PackageViewSet,TaxiViewSet,TransportViewSet
from django.urls import path,include
from rest_framework import routers






router = routers.DefaultRouter()
router.register("destintion",DestinationViewSet)
router.register("user",UserViewSet)
router.register("taxi",TaxiViewSet)
router.register("package",PackageViewSet)
router.register("transport",TransportViewSet)

urlpatterns = [
    path("",include(router.urls))
]




from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'fname', views.FNameViewSet)

router.register(r'lname', views.LNameViewSet)

router.register(r'race', views.RaceViewSet)

router.register(r'allign', views.AllignViewSet)

router.register(r'gender', views.GenderViewSet)

router.register(r'class', views.ClassTypeViewSet)

router.register(r'weight', views.WeightViewSet)



urlpatterns = [
    path('', include (router.urls)),
]


from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'fname', views.FNameViewSet)

router.register(r'lname', views.LNameViewSet)

router.register(r'race', views.RaceViewSet)

router.register(r'allignment', views.AllignmentViewSet)

router.register(r'gender', views.GenderViewSet)

router.register(r'classtype', views.ClassTypeViewSet)

router.register(r'weight', views.WeightViewSet)

router.register(r'height', views.HeightViewSet)

router.register(r'weapon', views.WeaponViewSet)

router.register(r'soctrait', views.SocTraitViewSet)

router.register(r'phystrait', views.PhysTraitViewSet)

router.register(r'level', views.LevelViewSet)



urlpatterns = [
    path('', include (router.urls)),
]

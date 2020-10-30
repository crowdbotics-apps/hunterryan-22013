from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import StatsViewSet

router = DefaultRouter()
router.register("stats", StatsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import NounViewSet

router = DefaultRouter()
router.register("noun", NounViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ProductionViewSet

router = DefaultRouter()
router.register("production", ProductionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

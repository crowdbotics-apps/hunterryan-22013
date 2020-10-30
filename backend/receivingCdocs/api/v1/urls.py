from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CdocsViewSet

router = DefaultRouter()
router.register("cdocs", CdocsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

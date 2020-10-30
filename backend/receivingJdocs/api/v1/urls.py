from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JdocsViewSet

router = DefaultRouter()
router.register("jdocs", JdocsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

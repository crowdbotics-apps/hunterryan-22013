from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ColumnsViewSet, NounViewSet

router = DefaultRouter()
router.register("noun", NounViewSet)
router.register("columns", ColumnsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

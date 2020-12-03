from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ColumnsViewSet, NounViewSet, UploadFileView

router = DefaultRouter()
router.register("noun", NounViewSet)
router.register("columns", ColumnsViewSet)
router.register("uploads", UploadFileView, basename="uploads")


urlpatterns = [
    path("", include(router.urls)),
]

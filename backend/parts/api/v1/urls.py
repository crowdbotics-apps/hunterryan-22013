from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AllOurPartsViewSet

router = DefaultRouter()
router.register("allourparts", AllOurPartsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

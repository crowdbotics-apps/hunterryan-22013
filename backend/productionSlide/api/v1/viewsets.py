from rest_framework import authentication
from productionSlide.models import Production
from .serializers import ProductionSerializer
from rest_framework import viewsets


class ProductionViewSet(viewsets.ModelViewSet):
    serializer_class = ProductionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Production.objects.all()

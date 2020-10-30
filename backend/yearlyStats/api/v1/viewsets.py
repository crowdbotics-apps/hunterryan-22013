from rest_framework import authentication
from yearlyStats.models import Stats
from .serializers import StatsSerializer
from rest_framework import viewsets


class StatsViewSet(viewsets.ModelViewSet):
    serializer_class = StatsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Stats.objects.all()

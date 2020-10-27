from rest_framework import authentication
from hydrostat.models import Noun
from .serializers import NounSerializer
from rest_framework import viewsets


class NounViewSet(viewsets.ModelViewSet):
    serializer_class = NounSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Noun.objects.all()

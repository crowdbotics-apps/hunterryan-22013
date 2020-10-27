from rest_framework import authentication
from hydrostat.models import Columns, Noun
from .serializers import ColumnsSerializer, NounSerializer
from rest_framework import viewsets


class NounViewSet(viewsets.ModelViewSet):
    serializer_class = NounSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Noun.objects.all()


class ColumnsViewSet(viewsets.ModelViewSet):
    serializer_class = ColumnsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Columns.objects.all()

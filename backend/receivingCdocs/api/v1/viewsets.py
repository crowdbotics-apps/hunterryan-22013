from rest_framework import authentication
from receivingCdocs.models import Cdocs
from .serializers import CdocsSerializer
from rest_framework import viewsets


class CdocsViewSet(viewsets.ModelViewSet):
    serializer_class = CdocsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Cdocs.objects.all()

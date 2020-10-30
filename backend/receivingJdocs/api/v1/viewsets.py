from rest_framework import authentication
from receivingJdocs.models import Jdocs
from .serializers import JdocsSerializer
from rest_framework import viewsets


class JdocsViewSet(viewsets.ModelViewSet):
    serializer_class = JdocsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Jdocs.objects.all()

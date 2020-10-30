from rest_framework import authentication
from parts.models import AllOurParts
from .serializers import AllOurPartsSerializer
from rest_framework import viewsets


class AllOurPartsViewSet(viewsets.ModelViewSet):
    serializer_class = AllOurPartsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = AllOurParts.objects.all()

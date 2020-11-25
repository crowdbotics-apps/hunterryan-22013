from rest_framework import authentication
from receivingCdocs.models import Cdocs
from .serializers import CdocsSerializer
from rest_framework import viewsets
from rest_framework.response import Response


class CdocsViewSet(viewsets.ModelViewSet):
    serializer_class = CdocsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Cdocs.objects.all()

    def create(self, request):
        serializer = self.serializer_class(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"file": serializer.data})

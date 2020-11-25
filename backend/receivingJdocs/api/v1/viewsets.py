from rest_framework import authentication
from receivingJdocs.models import Jdocs
from .serializers import JdocsSerializer
from rest_framework import viewsets
from rest_framework.response import Response


class JdocsViewSet(viewsets.ModelViewSet):
    serializer_class = JdocsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Jdocs.objects.all()

    def create(self, request):
        serializer = self.serializer_class(data=request.data, context={"request": request})        
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"file": serializer.data})

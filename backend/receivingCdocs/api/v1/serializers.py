from rest_framework import serializers
from receivingCdocs.models import Cdocs


class CdocsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cdocs
        fields = "__all__"

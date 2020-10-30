from rest_framework import serializers
from receivingJdocs.models import Jdocs


class JdocsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jdocs
        fields = "__all__"

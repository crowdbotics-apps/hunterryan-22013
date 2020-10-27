from rest_framework import serializers
from hydrostat.models import Noun


class NounSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noun
        fields = "__all__"

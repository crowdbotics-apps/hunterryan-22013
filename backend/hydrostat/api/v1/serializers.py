from rest_framework import serializers
from hydrostat.models import Columns, Noun


class NounSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noun
        fields = "__all__"


class ColumnsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Columns
        fields = "__all__"

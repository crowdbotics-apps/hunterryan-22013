from rest_framework import serializers
from parts.models import AllOurParts


class AllOurPartsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AllOurParts
        fields = "__all__"

from django.contrib import admin
from .models import CustomText, Status

admin.site.register(Status)
admin.site.register(CustomText)

# Register your models here.

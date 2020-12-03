"""hunterryan_22013 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from allauth.account.views import confirm_email
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf.urls.static import static

urlpatterns = [
    path("", include("home.urls")),
    path("accounts/", include("allauth.urls")),
    path("api/v1/", include("home.api.v1.urls")),
    path("admin/", admin.site.urls),
    path("users/", include("users.urls", namespace="users")),
    path("rest-auth/", include("rest_auth.urls")),
    # Override email confirm to use allauth's HTML view instead of rest_auth's API view
    path("rest-auth/registration/account-confirm-email/<str:key>/", confirm_email),
    path("rest-auth/registration/", include("rest_auth.registration.urls")),
    path("home/", include("home.urls")),
    path("api/v1/", include("hydrostat.api.v1.urls")),
    path("hydrostat/", include("hydrostat.urls")),
    path("api/v1/", include("receivingJdocs.api.v1.urls")),
    path("api/v1/", include("receivingCdocs.api.v1.urls")),
    path("api/v1/", include("productionSlide.api.v1.urls")),
    path("api/v1/", include("yearlyStats.api.v1.urls")),
    path("api/v1/", include("parts.api.v1.urls")),
    path("parts/", include("parts.urls")),
    path("productionSlide/", include("productionSlide.urls")),
    path("receivingCdocs/", include("receivingCdocs.urls")),
    path("receivingJdocs/", include("receivingJdocs.urls")),
    path("yearlyStats/", include("yearlyStats.urls")),
]

admin.site.site_header = "HunterRyan"
admin.site.site_title = "HunterRyan Admin Portal"
admin.site.index_title = "HunterRyan Admin"

# swagger
api_info = openapi.Info(
    title="HunterRyan API",
    default_version="v1",
    description="API documentation for HunterRyan App",
)

schema_view = get_schema_view(
    api_info,
    public=True,
    permission_classes=(permissions.IsAuthenticated,),
)

urlpatterns += [
    path("api-docs/", schema_view.with_ui("swagger", cache_timeout=0), name="api_docs")
]

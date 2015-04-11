from django.conf.urls import patterns, include, url
from rest_framework import routers
from . import views

from rest_framework.urlpatterns import format_suffix_patterns

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', views.PostViewSet)
router.register(r'problem', views.ProblemViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = patterns(
    '',
    url(r'^', include(router.urls))
)

format_suffix_patterns(urlpatterns)

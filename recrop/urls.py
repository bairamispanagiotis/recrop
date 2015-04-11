from django.conf.urls import include, url


urlpatterns = [
    # Examples:
    # url(r'^$', 'recrop.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^', include('miniblog.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api-basic-token-auth/', 'rest_framework.authtoken.views.obtain_auth_token'),
    url(r'^api-token-auth/', 'rest_framework_jwt.views.obtain_jwt_token'),

]

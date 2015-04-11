from rest_framework.permissions import IsAdminUser
from rest_framework import viewsets
import permission_backend_nonrel.models as model

from ..serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAdminUser, )
    queryset = model.User.objects.all()
    serializer_class = UserSerializer

    def pre_save(self, obj):
        obj.set_password(obj.password)
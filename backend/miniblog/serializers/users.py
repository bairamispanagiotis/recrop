from rest_framework import serializers

import permission_backend_nonrel.models as model


class UserSerializer(serializers.ModelSerializer):
    id = serializers.CharField()

    class Meta:
        model = model.User
        fields = ('id', 'url', 'username', 'email',
                  'first_name', 'last_name')
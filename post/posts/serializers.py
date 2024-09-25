# posts/serializers.py (새로 생성)

from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'  # 모든 필드를 직렬화하거나, 필요한 필드만 나ㅕ열

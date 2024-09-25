# posts/views.py

from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

# 게시글 목록 조회 및 생성 (GET, POST)
class PostListCreateAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# 게시글 세부 내용 조회, 수정 및 삭제 (GET, PATCH, DELETE)
class PostRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    # 404 에러 방지 및 커스텀 에러 메시지 처리
    def get_object(self):
        try:
            return super().get_object()
        except Post.DoesNotExist:
            raise NotFound(detail="요청하신 게시글을 찾을 수 없습니다.", code=404)

from rest_framework import generics, status
from rest_framework.response import Response
import requests
from .models import Vote
from .serializers import VoteSerializer

class VoteListCreateView(generics.ListCreateAPIView): 
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer

# 게시글 서비스의 post_id 검증
    def create(self, request, *args, **kwargs):
        post_id = request.data.get('post_id')

        try:
            # Post 서비스에 post_id가 존재하는지 확인하는 API 호출
            response = requests.get(f'http://localhost:8001/post/{post_id}/')
            
            if response.status_code != 200:
                # 유효하지 않은 post_id일 경우 오류 응답
                return Response({"error": "Invalid post ID"}, status=status.HTTP_400_BAD_REQUEST)
            
            # 정상적으로 Post 서비스와 통신되면, 투표 생성
            return super().create(request, *args, **kwargs)

        except requests.exceptions.RequestException as e:
            # 예외 발생 시 오류 응답
            print(f"Error communicating with Post service: {e}")
            return Response({"error": "Unable to communicate with Post service"}, status=status.HTTP_503_SERVICE_UNAVAILABLE)

class VoteDetailView(generics.RetrieveUpdateAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer

class VoteDeleteView(generics.DestroyAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer

class VoteByPostView(generics.ListAPIView):
    serializer_class = VoteSerializer

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return Vote.objects.filter(post_id=post_id)

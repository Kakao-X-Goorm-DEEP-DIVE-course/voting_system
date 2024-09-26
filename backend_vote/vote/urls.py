"""
URL configuration for voting_system project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.urls import path
from .views import (
    VoteListCreateView,
    VoteDetailView,
    VoteDeleteView,
    VoteByPostView,
)

urlpatterns = [
    # 전체 투표 목록을 가져오거나 새 투표를 생성하는 엔드포인트
    path('', VoteListCreateView.as_view(), name='vote-list-create'),

    # 특정 투표 항목을 조회하고 수정 (Retrieve, Update)
    path('<int:pk>/', VoteDetailView.as_view(), name='vote-detail'),

    # 특정 투표 항목을 삭제하는 엔드포인트
    path('<int:pk>/delete/', VoteDeleteView.as_view(), name='vote-delete'),

    # 특정 게시글의 모든 투표를 조회하는 엔드포인트
    path('post/<int:post_id>', VoteByPostView.as_view(), name='votes-by-post'),
]

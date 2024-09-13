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
from django.contrib import admin
from django.urls import path
from voting_system import views  # 방금 만든 뷰를 가져옵니다

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),  # 루트 URL에 index 뷰를 연결
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),  # 게시글 상세 페이지
]
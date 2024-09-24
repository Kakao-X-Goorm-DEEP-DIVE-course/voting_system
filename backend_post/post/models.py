from datetime import datetime
from django.db import models

class Post(models.Model):
    content = models.TextField()
    subject_1 = models.CharField(max_length=255)
    subject_2 = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    # 객체를 문자열로 표현
    # 관리자(admin) 페이지나 콘솔에서 객체를 출력할 때 문자열로 출력
    def __str__(self):
        return f"Post: {self.content[:30]}..."

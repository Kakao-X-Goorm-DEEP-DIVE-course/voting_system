from django.db import models

class Vote(models.Model):
    post_id = models.IntegerField(default=1)  # 게시글의 ID를 저장 (외래키 대신)
    vote_subject_1 = models.IntegerField(default=0)  # 첫 번째 투표 주제의 투표 수
    vote_subject_2 = models.IntegerField(default=0)  # 두 번째 투표 주제의 투표 수
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Vote on Post {self.post_id}: {self.vote_subject_1} vs {self.vote_subject_2}"

from rest_framework import serializers
from .models import Vote

class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ['id', 'post_id', 'vote_subject_1', 'vote_subject_2', 'created_at']

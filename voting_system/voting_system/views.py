from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from .models import Post


def index(request):
    return HttpResponse("Welcome to the Voting System")

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    post_data = {
        'id': post.id,
        'content': post.content,
        'subject_1': post.subject_1,
        'subject_2': post.subject_2,
        'created_at': post.created_at.strftime('%Y-%m-%d %H:%M:%S'),
    }
    return JsonResponse(post_data)
    
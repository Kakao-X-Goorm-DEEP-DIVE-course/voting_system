from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Post


def index(request):
    return HttpResponse("Welcome to the Voting System")


@csrf_exempt
def post(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        new_post = Post.objects.create(
            content=data.get('content'),
            subject_1=data.get('subject_1'),
            subject_2=data.get('subject_2'),
        )
        return JsonResponse('create clear', status=201, safe=False)
        
    elif request.method == 'GET':
        posts = Post.objects.all()
        posts_data = []
        for post in posts:
            posts_data.append({
                'id': post.id,
                'content': post.content,
                'subject_1': post.subject_1,
                'subject_2': post.subject_2,
                'created_at': post.created_at.strftime('%Y-%m-%d %H:%M:%S'),
            })
        return JsonResponse(posts_data, safe=False)
        
        
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
    
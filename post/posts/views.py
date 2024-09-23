from django.shortcuts import render
from .models import Post
from django.shortcuts import render, redirect
from .forms import PostForm




# 게시글 목록
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'posts/post_list.html', {'posts': posts})

# 게시글 세부 내용
def post_detail(request, pk):
    post = Post.objects.get(pk=pk)
    return render(request, 'posts/post_detail.html', {'post': post})

# 게시글 생성하는 뷰
def post_create(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('post_list')  # 게시글 목록으로 리다이렉트
    else:
        form = PostForm()
    return render(request, 'posts/post_form.html', {'form': form})

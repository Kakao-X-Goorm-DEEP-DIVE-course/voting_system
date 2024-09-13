import pymysql
from datetime import datetime
from django.db import models

class Database:
    def __init__(self, host, user, password, db):
        self.connection = pymysql.connect(
            host=host,
            user=user,
            password=password,
            db=db,
            cursorclass=pymysql.cursors.DictCursor
        )
        self.cursor = self.connection.cursor()

    def execute(self, query, params=None):
        self.cursor.execute(query, params)
        self.connection.commit()

    def fetch(self, query, params=None):
        self.cursor.execute(query, params)
        return self.cursor.fetchall()

from django.db import models

class Post(models.Model):
    content = models.TextField()
    subject_1 = models.CharField(max_length=255)
    subject_2 = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

class Vote(models.Model):
    post = models.ForeignKey(Post, related_name='votes', on_delete=models.CASCADE)
    vote_subject_1 = models.IntegerField(default=0)
    vote_subject_2 = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
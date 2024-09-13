from django.test import TestCase
from .orm import Database, Post, Vote

class VotingSystemTest(TestCase):
    def setUp(self):
        self.db = Database(host='localhost', user='your_user', password='your_password', db='voting_db')

    def test_create_post_and_vote(self):
        post = Post(self.db, content="Which is better?", subject_1="Cat", subject_2="Dog")
        post.save()

        post_id = self.db.fetch("SELECT id FROM posts ORDER BY created_at DESC LIMIT 1")[0]['id']
        vote = Vote(self.db, post_id=post_id)
        vote.save()

        vote.update_vote(subject_1_increment=1, subject_2_increment=2)
        vote_results = self.db.fetch(f"SELECT * FROM votes WHERE post_id = {post_id}")

        self.assertIsNotNone(vote_results)
        self.assertEqual(vote_results[0]['vote_subject_1'], 1)
        self.assertEqual(vote_results[0]['vote_subject_2'], 2)
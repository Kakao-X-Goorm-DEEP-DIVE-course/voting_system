import React from 'react';
import { Link } from 'react-router-dom';
import VoteList from '../components/VoteList';

function MainPage({ posts, onVote, onDelete, onUpdate }) {
  return (
    <div>
      <h1>실시간 투표 게시판</h1>
      <Link to="/create">
        <button>게시글 등록하기</button>
      </Link>
      <VoteList posts={posts} onVote={onVote} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default MainPage;

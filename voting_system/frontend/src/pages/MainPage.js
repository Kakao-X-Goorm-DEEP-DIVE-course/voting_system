import React from 'react';
import { Link } from 'react-router-dom';
import VoteList from '../components/VoteList';

function MainPage({ posts }) {
  console.log('Posts in MainPage:', posts); // `posts` 데이터가 제대로 넘어오는지 확인

  return (
    <div>
      <h1>실시간 투표 게시판</h1>
      <Link to="/create">
        <button>게시글 등록하기</button>
      </Link>
      <VoteList posts={posts} />
    </div>
  );
}

export default MainPage;
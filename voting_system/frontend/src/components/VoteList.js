import React from 'react';

function VoteList({ posts }) {
  console.log('Rendering posts in VoteList:', posts); // 데이터가 제대로 들어오는지 확인

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h3>{post.content}</h3>
            <p>1번: {post.subject_1}</p>
            <p>2번: {post.subject_2}</p>
            <p>생성일자: {post.created_at}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default VoteList;
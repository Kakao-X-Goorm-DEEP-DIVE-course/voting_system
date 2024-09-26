import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 게시물 목록 가져오기
  useEffect(() => {
    // Nginx를 통해 게시물 서비스로 GET 요청
    fetch('http://192.168.64.7:80/post/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // 게시물에 투표하기
  const handleVote = (postId, subject) => {
    // Nginx를 통해 투표 서비스로 POST 요청
    fetch('http://192.168.64.7:80/vote/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post_id: postId,
        vote_subject_1: subject === 'subject_1' ? 1 : 0,
        vote_subject_2: subject === 'subject_2' ? 1 : 0,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to vote');
        }
        return response.json();
      })
      .then((data) => {
        alert('Vote successfully submitted!');
        console.log('Vote response:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit vote.');
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.subject_1} vs {post.subject_2}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleVote(post.id, 'subject_1')}>{post.subject_1}</button>
            <button onClick={() => handleVote(post.id, 'subject_2')}>{post.subject_2}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

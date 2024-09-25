import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreateVotePage from './pages/CreateVotePage';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, options: ["짬뽕", "짜장"], votes: [10, 5] },
    { id: 2, options: ["콜라", "사이다"], votes: [7, 9] },
  ]);

  const handleVote = (id, optionIndex) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        const updatedVotes = [...post.votes];
        updatedVotes[optionIndex] += 1;
        return { ...post, votes: updatedVotes };
      }
      return post;
    }));
  };

  const handleUpdatePost = (id, updatedOptions) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, options: updatedOptions } : post
    ));
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const addPost = (options) => {
    const newPost = {
      id: posts.length + 1,
      options,
      votes: [0, 0],
    };
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainPage posts={posts} onVote={handleVote} onDelete={handleDeletePost} onUpdate={handleUpdatePost} />}
          />
          <Route path="/create" element={<CreateVotePage addPost={addPost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

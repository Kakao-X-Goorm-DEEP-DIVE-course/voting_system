import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreateVotePage from './pages/CreateVotePage';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from server
    fetch('http://localhost:8000/post', {
      method: 'GET'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setPosts(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainPage posts={posts} />}
          />
          <Route path="/create" element={<CreateVotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
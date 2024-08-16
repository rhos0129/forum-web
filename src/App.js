import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList'; 
import PostForm from './components/PostForm'; 

function App() {
  return (
    <Router>
      <div className="App">
        <h1>forum web</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

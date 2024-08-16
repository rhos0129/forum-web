import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/postService'; 

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, content });
      navigate('/');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h2>추가</h2>
      {error && <p>Error: {error.message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default PostForm;

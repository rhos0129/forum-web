import React, { useState, useEffect } from 'react';
import { fetchPosts, deletePost } from '../api/postService';
import { Link } from 'react-router-dom'; 

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (err) {
      setError(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Link to="/create">추가</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>[{post.id}] {post.title} | {post.content}</p>
            <button onClick={() => handleDelete(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

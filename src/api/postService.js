import axios from 'axios';
import config from '../config';

const API_URL = `${config.apiUrl}/posts`;


export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching posts: ' + error.message);
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(API_URL, post);
    return response.data;
  } catch (error) {
    throw new Error('Error creating post: ' + error.message);
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_URL}/${postId}`);
  } catch (error) {
    throw new Error('Error deleting post: ' + error.message);
  }
};

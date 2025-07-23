import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://moodmate-api.onrender.com/api',
    withCredentials: true, // Important for cross-origin cookies and sessions
});

// Attach Authorization token if available
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const fetchPosts = () => API.get('/posts/all');
export const createPost = (text) => API.post('/posts', { text });
export const replyToPost = (postId, text) => API.post(`/posts/${postId}/reply`, { text });
export const deletePost = (postId) => API.delete(`/posts/${postId}`);

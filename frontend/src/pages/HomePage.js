/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/Wall/PostList';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const token = localStorage.getItem('token');
    const currentUser = localStorage.getItem('username');

    const fetchPosts = async () => {
        try {
            const res = await axios.get('https://moodmate-backend-bzmq.onrender.com/api/posts/all');
            setPosts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleCreatePost = async () => {
        if (newPost.trim() === '') return;

        try {
            await axios.post(
                'https://moodmate-backend-bzmq.onrender.com/api/posts/create',
                { text: newPost },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewPost('');
            fetchPosts();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#dddddbff',
            height: '100vh',
            display: 'flex',
            borderRadius: '10px',
            flexDirection: 'column'
        }}>
            <div style={{
                padding: '10px 0',
                backgroundColor: '#9c9b9bff',
                borderBottom: '2px solid #ccc',
                borderRadius: '15px',
                flexShrink: 0
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: 24, color: '#fffffeff' }}>#moodsfortheday</h2>

                <div style={{
                    marginBottom: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <input
                        type="text"
                        placeholder="What's on your mind today? Share with your friends..."
                        value={newPost}
                        onChange={(e) => {
                            const input = e.target.value;
                            const capitalized = input.charAt(0).toUpperCase() + input.slice(1);
                            setNewPost(capitalized);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleCreatePost();
                            }
                        }}
                        style={{
                            width: '70%',
                            padding: '8px',
                            backgroundColor: 'rgba(235, 232, 232, 0.4)',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            outline: 'none'
                        }}
                    />

                    <button onClick={handleCreatePost} style={{
                        padding: '8px 12px',
                        marginLeft: '10px',
                        backgroundColor: '#f3ef1bff',
                        borderRadius: '10px',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        <i className="ri-send-plane-2-fill"></i>
                    </button>
                </div>
            </div>

            <div style={{
                flexGrow: 1,
                overflowY: 'auto',
                padding: '10px',
                overflowWrap: 'break-word',   // Added this to ensure text wraps properly
                wordWrap: 'break-word',        // Fallback for older browsers
                whiteSpace: 'pre-wrap'         // Preserve line breaks and wrap long text
            }}>
                <PostList posts={posts} currentUser={currentUser} fetchPosts={fetchPosts} />
            </div>
        </div>
    );
};

export default HomePage;

*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/Wall/PostList';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = JSON.parse(atob(token.split('.')[1]));
                setCurrentUser(decoded.username);
            } catch (err) {
                console.error('Token decoding failed:', err);
            }
        }
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await axios.get('https://moodmate-backend-bzmq.onrender.com/api/posts/all');
            setPosts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleCreatePost = async () => {
        if (newPost.trim() === '') return;

        const token = localStorage.getItem('token');
        try {
            await axios.post(
                'https://moodmate-backend-bzmq.onrender.com/api/posts/create',
                { text: newPost },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewPost('');
            fetchPosts();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#dddddbff',
            height: '100vh',
            display: 'flex',
            borderRadius: '10px',
            flexDirection: 'column'
        }}>
            <div style={{
                padding: '10px 0',
                backgroundColor: '#9c9b9bff',
                borderBottom: '2px solid #ccc',
                borderRadius: '15px',
                flexShrink: 0
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: 24, color: '#fffffeff' }}>#moodsfortheday</h2>

                <div style={{
                    marginBottom: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <input
                        type="text"
                        placeholder="What's on your mind today? Share with your friends..."
                        value={newPost}
                        onChange={(e) => {
                            const input = e.target.value;
                            const capitalized = input.charAt(0).toUpperCase() + input.slice(1);
                            setNewPost(capitalized);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCreatePost();
                        }}
                        style={{
                            width: '70%',
                            padding: '8px',
                            backgroundColor: 'rgba(235, 232, 232, 0.4)',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            outline: 'none'
                        }}
                    />

                    <button onClick={handleCreatePost} style={{
                        padding: '8px 12px',
                        marginLeft: '10px',
                        backgroundColor: '#f3ef1bff',
                        borderRadius: '10px',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        <i className="ri-send-plane-2-fill"></i>
                    </button>
                </div>
            </div>

            <div style={{
                flexGrow: 1,
                overflowY: 'auto',
                padding: '10px',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                whiteSpace: 'pre-wrap'
            }}>
                <PostList posts={posts} currentUser={currentUser} fetchPosts={fetchPosts} />
            </div>
        </div>
    );
};

export default HomePage;

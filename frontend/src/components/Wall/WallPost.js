/*import React, { useState } from 'react';
import axios from 'axios';

const WallPost = ({ post, currentUser, fetchPosts }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [localReplies, setLocalReplies] = useState(post.replies);

    const [confirmDeletePost, setConfirmDeletePost] = useState(false);
    const [confirmDeleteReplyIndex, setConfirmDeleteReplyIndex] = useState(null);

    const token = localStorage.getItem('token');

    const toggleReplies = () => {
        setShowReplies(!showReplies);
    };

    const handleReplySubmit = async () => {
        if (replyText.trim() === '') return;

        try {
            const capitalized = replyText.charAt(0).toUpperCase() + replyText.slice(1);
            const res = await axios.post(
                `https://moodmate-backend-bzmq.onrender.com/api/posts/reply/${post._id}`,
                { text: capitalized },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setLocalReplies(res.data.replies);
            setReplyText('');
        } catch (err) {
            console.error(err);
        }
    };

    const confirmPostDelete = () => {
        setConfirmDeletePost(true);
    };

    const handleDeletePost = async () => {
        try {
            await axios.delete(
                `https://moodmate-backend-bzmq.onrender.com/api/posts/delete/${post._id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setConfirmDeletePost(false);
            fetchPosts();
        } catch (err) {
            console.error(err);
        }
    };

    const confirmReplyDelete = (idx) => {
        setConfirmDeleteReplyIndex(idx);
    };

    const handleDeleteReply = async () => {
        try {
            const res = await axios.delete(
                `https://moodmate-backend-bzmq.onrender.com/api/posts/reply/${post._id}/${confirmDeleteReplyIndex}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setLocalReplies(res.data.replies);
            setConfirmDeleteReplyIndex(null);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="post-container" style={{ position: 'relative' }}>
            <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '8px', 
                    borderBottom: '1px solid #ccc', 
                    cursor: 'pointer' 
                }} 
                onClick={toggleReplies}
            >
                <div style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                    maxWidth: '80%'
                }}>
                    <strong>{post.user}:</strong> {post.text}
                </div>

                {currentUser === post.user && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            confirmPostDelete();
                        }} 
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '18px'
                        }}
                        title="Delete Post"
                    >
                        <i className="ri-delete-bin-6-line"></i>
                    </button>
                )}
            </div>

            {showReplies && (
                <div className="replies-section">
                    {localReplies.map((reply, idx) => (
                        <div key={idx} className="reply-item" style={{ marginLeft: '20px', marginTop: '5px' }}>
                            <strong>{reply.user}:</strong> {reply.text}
                            {currentUser === reply.user && (
                                <button 
                                    onClick={() => confirmReplyDelete(idx)} 
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        marginLeft: '10px',
                                        fontSize: '14px'
                                    }}
                                    title="Delete Reply"
                                >
                                    <i className="ri-delete-bin-2-line"></i>
                                </button>
                            )}
                        </div>
                    ))}

                    <div className="reply-input" style={{ marginTop: '8px' }}>
                        <input
                            type="text"
                            placeholder="Write a reply..."
                            value={replyText}
                            onChange={(e) => {
                                const val = e.target.value;
                                setReplyText(val.charAt(0).toUpperCase() + val.slice(1));
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleReplySubmit();
                                }
                            }}
                        />
                        <button
                        style={{
                             backgroundColor: '#dadad7ff',
                             border: 'none',
                             padding: '6px 14px',
                             borderRadius: '8px',
                             cursor: 'pointer',
                             marginLeft: '10px',
                             transition: '0.2s ease-in-out',
                            }}
                         onClick={handleReplySubmit}><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            )}

            


           
*/

import React, { useState } from 'react';
import axios from 'axios';

const WallPost = ({ post, currentUser, fetchPosts }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [localReplies, setLocalReplies] = useState(post.replies);

    const [confirmDeletePost, setConfirmDeletePost] = useState(false);
    const [confirmDeleteReplyIndex, setConfirmDeleteReplyIndex] = useState(null);

    const token = localStorage.getItem('token');

    const toggleReplies = () => {
        setShowReplies(!showReplies);
    };

    const handleReplySubmit = async () => {
        if (replyText.trim() === '') return;

        try {
            const capitalized = replyText.charAt(0).toUpperCase() + replyText.slice(1);
            const res = await axios.post(
                `https://moodmate-backend-bzmq.onrender.com/api/posts/reply/${post._id}`,
                { text: capitalized },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setLocalReplies(res.data.replies);
            setReplyText('');
        } catch (err) {
            console.error(err);
        }
    };

    const confirmPostDelete = () => {
        setConfirmDeletePost(true);
    };

    const handleDeletePost = async () => {
        try {
            await axios.delete(
                `https://moodmate-backend-bzmq.onrender.com/api/posts/delete/${post._id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setConfirmDeletePost(false);
            fetchPosts();
        } catch (err) {
            console.error(err);
        }
    };

    const confirmReplyDelete = (idx) => {
        setConfirmDeleteReplyIndex(idx);
    };

    const handleDeleteReply = async () => {
        try {
            const res = await axios.delete(
                `https://moodmate-backend-bzmq.onrender.com/api/posts/reply/${post._id}/${confirmDeleteReplyIndex}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setLocalReplies(res.data.replies);
            setConfirmDeleteReplyIndex(null);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="post-container" style={{ position: 'relative' }}>
            <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '8px', 
                    borderBottom: '1px solid #ccc', 
                    cursor: 'pointer' 
                }} 
                onClick={toggleReplies}
            >
                <div style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                    maxWidth: '80%'
                }}>
                    <strong>{post.user}:</strong> {post.text}
                </div>

                {currentUser === post.user && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            confirmPostDelete();
                        }} 
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '18px'
                        }}
                        title="Delete Post"
                    >
                        <i className="ri-delete-bin-6-line"></i>
                    </button>
                )}
            </div>

            {showReplies && (
                <div className="replies-section">
                    {localReplies.map((reply, idx) => (
                        <div key={idx} className="reply-item" style={{ marginLeft: '20px', marginTop: '5px' }}>
                            <strong>{reply.user}:</strong> {reply.text}
                            {currentUser === reply.user && (
                                <button 
                                    onClick={() => confirmReplyDelete(idx)} 
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        marginLeft: '10px',
                                        fontSize: '14px'
                                    }}
                                    title="Delete Reply"
                                >
                                    <i className="ri-delete-bin-2-line"></i>
                                </button>
                            )}
                        </div>
                    ))}

                    <div className="reply-input" style={{ marginTop: '8px', display: 'flex' }}>
                        <input
                            type="text"
                            placeholder="Write a reply..."
                            value={replyText}
                            onChange={(e) => {
                                const val = e.target.value;
                                setReplyText(val.charAt(0).toUpperCase() + val.slice(1));
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleReplySubmit();
                                }
                            }}
                            style={{
                                flex: 1,
                                padding: '6px',
                                borderRadius: '6px',
                                border: '1px solid #ccc'
                            }}
                        />
                        <button
                            style={{
                                backgroundColor: '#dadad7ff',
                                border: 'none',
                                padding: '6px 14px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                marginLeft: '10px',
                                transition: '0.2s ease-in-out',
                            }}
                            onClick={handleReplySubmit}
                        >
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>
            )}

            {/* Custom Modal for Post Delete */}
            {confirmDeletePost && (
                <div style={modalStyles.backdrop}>
                    <div style={modalStyles.modal}>
                        <p>Are you sure you want to delete this post?</p>
                        <button onClick={handleDeletePost} style={modalStyles.button}>Yes</button>
                        <button onClick={() => setConfirmDeletePost(false)} style={modalStyles.button}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Custom Modal for Reply Delete */}
            {confirmDeleteReplyIndex !== null && (
                <div style={modalStyles.backdrop}>
                    <div style={modalStyles.modal}>
                        <p>Are you sure you want to delete this reply?</p>
                        <button onClick={handleDeleteReply} style={modalStyles.button}>Yes</button>
                        <button onClick={() => setConfirmDeleteReplyIndex(null)} style={modalStyles.button}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const modalStyles = {
    backdrop: {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
    },
    modal: {
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        backgroundColor: '#fffffeff',
    },
    button: {
        margin: '10px',
        padding: '8px 12px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
    }
};

export default WallPost;













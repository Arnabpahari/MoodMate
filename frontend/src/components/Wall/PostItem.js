import React, { useState } from 'react';
import { replyToPost, deletePost } from '../../api/postApi';

const PostItem = ({ post, refreshPosts }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [replyText, setReplyText] = useState('');

    const username = localStorage.getItem('username');

    const handleReply = async () => {
        if (!replyText.trim()) return;
        try {
            await replyToPost(post._id, replyText);
            setReplyText('');
            refreshPosts();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async () => {
        try {
            await deletePost(post._id);
            refreshPosts();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
            <div onClick={() => setShowReplies(!showReplies)} style={{ cursor: 'pointer' }}>
                <strong>{post.user}</strong>: {post.text}
            </div>

            {username === post.user && (
                <button onClick={handleDelete} style={{ color: 'red', marginTop: '5px', cursor: 'pointer' }}>Delete</button>
            )}

            {showReplies && (
                <div style={{ marginTop: '10px', paddingLeft: '15px' }}>
                    {post.replies.map((reply, index) => (
                        <div key={index} style={{ marginBottom: '5px' }}>
                            <strong>{reply.user}</strong>: {reply.text}
                        </div>
                    ))}

                    <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a reply..."
                        style={{ width: '80%', padding: '5px' }}
                    />
                    <button onClick={handleReply} style={{ marginLeft: '5px' }}>Reply</button>
                </div>
            )}
        </div>
    );
};

export default PostItem;

import React from 'react';
import WallPost from './WallPost';

const PostList = ({ posts, currentUser, fetchPosts }) => {
    return (
        <div>
            {posts.map(post => (
                <WallPost
                    key={post._id}
                    post={post}
                    currentUser={currentUser}
                    fetchPosts={fetchPosts}
                />
            ))}
        </div>
    );
};

export default PostList;


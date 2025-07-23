const Post = require('../models/Post');
const leoProfanity = require('leo-profanity');
leoProfanity.add(leoProfanity.getDictionary('en'));

exports.createPost = async (req, res) => {
    try {
        let { text } = req.body;

        // Filter bad words
        text = leoProfanity.clean(text);

        const newPost = new Post({
            user: req.user.username, // From JWT middleware
            text,
            replies: []
        });

        await newPost.save();
        res.json(newPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ timestamp: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addReply = async (req, res) => {
    try {
        const { postId } = req.params;
        let { text } = req.body;

        // Filter bad words
        text = leoProfanity.clean(text);

        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        post.replies.push({
            user: req.user.username,
            text
        });

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const { postId } = req.params;

        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        // Check if the user is the owner of the post
        if (post.user !== req.user.username) {
            return res.status(403).json({ message: 'You can only delete your own posts' });
        }

        await Post.findByIdAndDelete(postId);
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.deleteReply = async (req, res) => {
    try {
        const { postId, replyIndex } = req.params;
        const post = await Post.findById(postId);

        if (!post) return res.status(404).json({ message: 'Post not found' });

        // Check if the reply exists
        if (replyIndex >= post.replies.length) {
            return res.status(404).json({ message: 'Reply not found' });
        }

        // Check if the user is the owner of the reply
        if (post.replies[replyIndex].user !== req.user.username) {
            return res.status(403).json({ message: 'You can only delete your own reply' });
        }

        post.replies.splice(replyIndex, 1);
        await post.save();

        res.json({ message: 'Reply deleted', replies: post.replies });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

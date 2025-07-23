const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    user: String,
    text: String,
    timestamp: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
    user: String,
    text: String,
    replies: [replySchema],
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);

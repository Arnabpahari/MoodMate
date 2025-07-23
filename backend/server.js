const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configure CORS properly
const allowedOrigins = ['https://moodmate-frontend.onrender.com'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true, // Enable if using cookies/session
}));

app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes.js');
app.use('/api/auth', authRoutes);

const postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);

// Root check
app.get('/', (req, res) => res.send('MoodMate API is running'));

//  Mongo connection + start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
})
.catch(err => console.log(err));



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
const authRoutes = require('./routes/authRoutes.js');
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => res.send('MoodMate API is running'));


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
})
.catch(err => console.log(err));


const postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);



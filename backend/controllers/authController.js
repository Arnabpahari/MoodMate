const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const Filter = require('leo-profanity');// For bad word check

exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Profanity filter for username
        if (Filter.check(username)) {
            return res.status(400).json({ message: 'Username contains inappropriate words' });
        }

        // Check for existing username
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: 'Username already taken' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({ username, password: hashedPassword });

        await newUser.save();

        // Generate token
        const token = generateToken(newUser);
        res.json({ token, username: newUser.username });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = generateToken(user);
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

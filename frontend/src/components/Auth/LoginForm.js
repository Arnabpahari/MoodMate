import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://moodmate-backend-bzmq.onrender.com/api/auth/login',
                {
                    username: formData.username,
                    password: formData.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const token = response.data.token;
            localStorage.setItem('token', token);
            onLoginSuccess();
        } catch (err) {
            console.error(err);
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                style={inputStyle}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={inputStyle}
                required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" style={buttonStyle}>Login</button>
        </form>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px'
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px'
};

export default LoginForm;











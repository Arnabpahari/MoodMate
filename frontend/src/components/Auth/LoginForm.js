// src/components/Auth/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // ✅ ADD THIS

const LoginForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();  // ✅ INIT NAVIGATE

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'https://moodmate-backend-bzmq.onrender.com/api/auth/login',
                formData
            );
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);

            console.log("Login success. Token:", res.data.token);
            navigate('/home');  // ✅ Use React Router navigation
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
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
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px'
};

export default LoginForm;




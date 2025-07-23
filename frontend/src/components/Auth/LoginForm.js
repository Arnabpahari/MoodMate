// src/components/Auth/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            const token = res.data.token;

            if (token) {
                console.log("Login success. Token:", token);
                localStorage.setItem('token', token);

                // 🔒 Confirm token is saved
                const savedToken = localStorage.getItem('token');
                if (savedToken) {
                    console.log("Token saved to localStorage:", savedToken);
                    navigate('/home');
                } else {
                    console.error("Token not saved.");
                }
            } else {
                console.error("No token received.");
            }
        } catch (err) {
            console.error("Login failed:", err.response?.data?.message || err.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginForm;








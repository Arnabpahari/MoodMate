import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            const token = res.data.token;

            if (token) {
                console.log("Login success. Token:", token);
                localStorage.setItem('token', token);

                // 🧠 Confirm token is saved before navigating
                const savedToken = localStorage.getItem('token');
                if (savedToken) {
                    navigate('/home');
                } else {
                    console.error("Token was not saved to localStorage.");
                }
            } else {
                console.error("No token received in response.");
            }
        } catch (err) {
            console.error("Login failed:", err.response?.data?.message || err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;







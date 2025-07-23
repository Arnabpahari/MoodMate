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

            console.log("Login success. Token:", token);

            if (token) {
                localStorage.setItem('token', token);
                const saved = localStorage.getItem('token');
                console.log("Saved in localStorage:", saved);

                if (saved === token) {
                    navigate('/home');
                } else {
                    console.error("Token not properly saved.");
                }
            } else {
                console.error("No token received in response.");
            }
        } catch (err) {
            console.error("Login failed:", err.response?.data?.message || err.message);
        }
    };

    return (
        <div>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;









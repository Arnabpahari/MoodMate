import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            window.location.href = '/home';  // Redirect to HomePage
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                placeholder="Choose Username"
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
            <button type="submit" style={buttonStyle}>Signup</button>
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

export default SignupForm;

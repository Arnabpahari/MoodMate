import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async () => {
        try {
            const url = isLogin
                ? 'https://moodmate-backend-bzmq.onrender.com/api/auth/login'
                : 'https://moodmate-backend-bzmq.onrender.com/api/auth/signup';

            const res = await axios.post(url, { username, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            window.location.href = '/';
        } catch (err) {
            alert('Authentication failed. Please check credentials or try a different username.');
        }
    };

    return (
        <div style={{
            maxWidth: '400px',
            margin: '80px auto',
            padding: '24px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                {isLogin ? 'Login' : 'Signup'}
            </h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />
            <button
                onClick={handleAuth}
                style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#f3ef1b',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                {isLogin ? 'Login' : 'Signup'}
            </button>
            <p style={{ textAlign: 'center', marginTop: '14px' }}>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <span
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    {isLogin ? 'Signup' : 'Login'}
                </span>
            </p>
        </div>
    );
};

export default AuthPage;






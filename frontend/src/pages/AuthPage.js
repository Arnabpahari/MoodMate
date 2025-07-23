import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import SignupForm from '../components/Auth/SignupForm';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ setIsAuthenticated }) => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        navigate('/home');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>MoodMate</h1>
            {isLogin ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            ) : (
                <SignupForm />
            )}
            <p style={styles.toggleText}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button onClick={() => setIsLogin(!isLogin)} style={styles.toggleButton}>
                    {isLogin ? " Signup" : " Login"}
                </button>
            </p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: '80px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center'
    },
    heading: {
        fontSize: '28px',
        marginBottom: '20px'
    },
    toggleText: {
        marginTop: '20px'
    },
    toggleButton: {
        background: 'none',
        color: '#007bff',
        border: 'none',
        fontSize: '16px',
        marginLeft: '8px',
        cursor: 'pointer'
    }
};

export default AuthPage;





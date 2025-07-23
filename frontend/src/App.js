import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/auth" />} />
                <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
        </Router>
    );
};

export default App;




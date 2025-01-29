import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false); // Loading state for button

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Email and Password are required!");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
                {
                  email,
                  password,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  withCredentials: true, // Include cookies (for auth token)
                }
              );
              
            
            if (response.data.ok) {
                // console.log("correct");
                toast.success('Logged in successfully');
                login(response.data.data); // Log in the user (store tokens, etc.)
                navigate('/');
            } else {
                toast.error(response.data.message || 'Login failed');
            }
            // console.log("correct");
        } catch (error) {
            console.log(error);
            toast.error('An error occurred during login');
        } finally {
            setLoading(false);
        }

    }


    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>

            </form>
            <div className="signup-link">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    )
}

export default Login
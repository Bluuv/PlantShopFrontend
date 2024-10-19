import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUsername, setLoggedIn } from '../../store/LoginSlice';
import styles from './Login.module.css';  

const Login: React.FC = () => {
    const [username, setUsernameInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const loginData = {
            username: username,
            password: password,
        };
    
        try {

            const response = await axios.post('http://localhost:8080/shop/login', loginData);
            if (response.status === 200) {
                console.log('Login successful!');
                dispatch(setUsername(username));  
                dispatch(setLoggedIn(true));      
            } else {
                console.log('Failed to log in');
                setError('Failed to log in, please try again.');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('Failed to log in, please try again.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    {error && <p className={styles.error}>{error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsernameInput(e.target.value)}
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
            </div>
        </div>
    );
};

export default Login;

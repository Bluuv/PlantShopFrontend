import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';  
import { setUsername, setEmail, setPassword, setConfirmPassword, resetSignup } from '../../store/signupSlice';
import styles from './Signup.module.css';

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.signUp.username);
  const email = useSelector((state: any) => state.signUp.email);
  const password = useSelector((state: any) => state.signUp.password);
  const confirmPassword = useSelector((state: any) => state.signUp.confirmPassword);
  const [error, setError] = useState<string | null>(null);  

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    
    const accountData = {
      username: username,
      email: email,
      password: password,
      money: 0
    };

    try {
      
      const response = await axios.post('http://localhost:8080/shop/register', accountData, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      if (response.status === 200) {
        console.log('Sign-up successful!');
        dispatch(resetSignup()); 
      } else {
        console.log('Failed to sign up');
        setError('Failed to sign up, please try again.');
      }
    } catch (err) {
      console.error('Error during sign up:', err);
      setError('Failed to sign up, please try again.');
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpBox}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
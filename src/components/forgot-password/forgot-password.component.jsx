import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './forgot-password.styles.css'
import { changePassowrd } from '../../utils/firebase/firebase.utils';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        try {
            await changePassowrd(email);
            setMessage('Password reset link sent to your email.');
            setError('');
            // Clear any errors if successful
        } catch (err) {
            setError(err.message);
            setMessage(''); // Clear any messages if there's an error
        }
    };

    return (
        <div className='forgot-password-container'>
            <input className='forgot-password-input'
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className='forgot-password-button' onClick={handleResetPassword}>Reset Password</button>
            <button className='forgot-password-button' onClick={() => { navigate('/') }}>Go to Login</button>


            {message && <p className='forgot-password-message' >{message}</p>}
            {error && <p className='forgot-password-message' style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default ForgotPassword;

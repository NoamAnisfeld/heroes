import '../../styles/LoginPage.scss';
import React, { useState } from 'react';
import { addUser } from '../../mockup-backend/api';
import { validatePasswordShape } from './validation';

export default function SignUpForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordFieldInFocus, setIsPasswordFieldInFocus] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    
    const isPasswordValid = validatePasswordShape(password);

    async function register() {
        try {
            await addUser(username, password);
            setFailure(false);
            setSuccess(true);
        } catch (e) {
            setSuccess(false);
            setFailure(true);
        }
    }

    return <>
        <form className='signup-form'>
            <h2>Not registered yet?</h2>
            <label>Username
                <input type="text"
                    onChange={e => setUsername(e.target.value)}
                />
            </label>

            {success && <p className="success">
                User registered successfully
            </p>}
            {failure && <p className="failure">
                Registration failed - user already exists or another reason
            </p>}

            <label>Password
                <input type="password"
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setIsPasswordFieldInFocus(true)}
                    onBlur={() => setIsPasswordFieldInFocus(false)}
                />
            </label>

            <p
                className={[
                    'info',
                    password && !isPasswordValid && !isPasswordFieldInFocus ?
                        'warning'
                        : ''
                ].join(' ')}
            >
                Password needs to be at least 8 characters long, 
                and must contain at least 1 capital letter, 
                one digit and one non-alphanumeric character
            </p>

            <button
                type="button"
                onClick={register}
                disabled={!username || !password || !isPasswordValid}
            >
                Register
            </button>
        </form>
    </>
}
import '../../styles/SignUpForm.scss';
import { useState } from 'react';
import { addUser } from '../../mockup-backend/api';

export default function SignUpForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

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
        <h2>Not registered yet?</h2>
        <form className='signup-form'>
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
                />
            </label>

            <button type="button" onClick={register}>Register</button>
        </form>
    </>
}
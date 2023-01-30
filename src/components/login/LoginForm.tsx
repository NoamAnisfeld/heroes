import '../../styles/LoginPage.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateCredentials } from '../../mockup-backend/api';
import { login, useAppSelector, useAppDispatch } from "../../store/store";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    async function performLogin() {
        if (await validateCredentials(username, password)) {
            dispatch(login(username));
            navigate('/');
        } else {
            setLoginFailed(true);
        }
    }

    return <form className='login-form'>
        <h2>Enter your credentials</h2>

        <label>
            <span>Username</span>
            <input type="text"
                onChange={e => setUsername(e.target.value)}
            />
        </label>

        <label>Password
            <input type="password"
                onChange={e => setPassword(e.target.value)}
            />
        </label>

        {loginFailed ? <p>
            User not found or credentials don't match, 
            please try again or register as a new user
        </p> : undefined}

        <button
            type="button"
            onClick={performLogin}
            disabled={!username || !password}
        >
            Login
        </button>
    </form>
}
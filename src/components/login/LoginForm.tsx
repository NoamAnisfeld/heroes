import '../../styles/LoginPage.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, useAppSelector, useAppDispatch } from "../../store/store";

export default function LoginForm() {
    const loggedInUser = useAppSelector(state => state.user);
    const [username, setUsername] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function performLogin() {
        if (username) {
            dispatch(login(username));
            navigate('/');
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
            <input type="password" />
        </label>

        <button type="button" onClick={performLogin}>Login</button>
    </form>
}
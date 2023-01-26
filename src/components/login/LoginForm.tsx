import '../../styles/LoginForm.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, useAppSelector, useAppDispatch } from "../../store/store";

export default function LoginFrom() {
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
        <label>Username</label>
        <input type="text"
            onChange={e => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input type="password" />

        <button type="button" onClick={performLogin}>Login</button>
    </form>
}
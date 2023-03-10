import '../../styles/LoginPage.scss';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function LoginPage() {
    return <>
        <header>Login</header>
        <main className="login-wrapper">
            <LoginForm />
            <SignUpForm />
        </main>
    </>
}
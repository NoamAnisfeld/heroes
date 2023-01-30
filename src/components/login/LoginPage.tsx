import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function LoginPage() {
    return <>
        <header>Login</header>
        <main>
            <LoginForm />
            <SignUpForm />
        </main>
    </>
}
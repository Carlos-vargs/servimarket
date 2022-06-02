import LoginForm from "@components/LoginForm";
import LayoutForm from "@components/LayoutForm";

function Login() {
    return (
        <LayoutForm
            message="Don't have an account yet?"
            linkName="Register Now!"
            url="/register"
            title="Login"
        >
            <LoginForm />
        </LayoutForm>
    )
}

export default Login;
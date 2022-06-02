import LayoutForm from "@components/LayoutForm";
import RegisterForm from "@components/RegisterForm";

function Register() {
    return (
        <LayoutForm
            message="Already account yet?"
            linkName="Login Now!"
            url="/login"
            title="Register"
            width="1073px"
            height={['auto', 'auto', '579px', '579px', '579px']}
        >
            <RegisterForm />
        </LayoutForm>
    )
}

export default Register;
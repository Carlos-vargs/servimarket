import LoginForm from "@components/LoginForm";
import LayoutForm from "@components/LayoutForm";
import { getCsrfToken } from "next-auth/react";

export default function Login({ csrfToken }) {

    return (
        <LayoutForm
            message="Don't have an account yet?"
            linkName="Register Now!"
            url="/register"
            title="Login"
            height="auto"
        >
            <LoginForm csrfToken={csrfToken} />
        </LayoutForm>
    )
}


export async function getServerSideProps(ctx) {

    const csrfToken = await getCsrfToken(ctx)

    return {
        props: { csrfToken },
    }

}

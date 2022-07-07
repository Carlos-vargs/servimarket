import LoginForm from "@components/LoginForm";
import LayoutForm from "@components/LayoutForm";
import { getSession } from "next-auth/react";

export default function Login() {

    return (
        <LayoutForm
            message="Don't have an account yet?"
            linkName="Register Now!"
            url="/register"
            title="Login"
            height="auto"
        >
            <LoginForm />
        </LayoutForm>
    )
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    if (session) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }

    return {
        props: {}
    }
}
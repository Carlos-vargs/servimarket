import dynamic from "next/dynamic";
import { getSession } from "next-auth/react";
import LayoutForm from "@components/LayoutForm";
const LoginForm = dynamic(() => import("@components/LoginForm"));

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
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
}

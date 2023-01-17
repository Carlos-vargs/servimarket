import dynamic from "next/dynamic";
import { getSession } from "next-auth/react";
import LayoutForm from "@components/LayoutForm";
const RegisterForm = dynamic(() => import("@components/RegisterForm"));

export default function Register() {
  return (
    <LayoutForm
      message="Already account yet?"
      linkName="Login Now!"
      url="/login"
      title="Register"
      width="1073px"
      height={["auto", "auto", "579px", "579px", "579px"]}
    >
      <RegisterForm />
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

import dynamic from "next/dynamic";
import LayoutPage from "@components/LayoutPage";
const UserDetails = dynamic(() => import("@components/UserDetails"));
const CompanyList = dynamic(() => import("@components/CompanyList"));

export default function Profile({ user }) {
  return (
    <LayoutPage titleHead={user.name}>
      <UserDetails user={user} />
      <CompanyList companies={user.companies} />
    </LayoutPage>
  );
}

export async function getServerSideProps(ctx) {
  const user = await fetch(
    `${process.env.NEXT_API_URL}/user?id=${ctx.query.id}`
  ).then((res) => res.json());

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: { user },
  };
}

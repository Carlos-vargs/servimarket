import dynamic from "next/dynamic";
import { Flex } from "@chakra-ui/react";
import LayoutPage from "@components/LayoutPage";
const UserList = dynamic(() => import("@components/UserList"));
const PrimeData = dynamic(() => import("@components/PrimeData"));
const UsageGuide = dynamic(() => import("@components/UsageGuide"));
const CompanyList = dynamic(() => import("@components/CompanyList"));

export default function Home({ companies, users }) {
  return (
    <LayoutPage titleHead="Home" coverImage={false}>
      <PrimeData />
      <UsageGuide />
      <UserList users={users} />
      <Flex width="full" id="explore" backgroundColor="base">
        <CompanyList
          gridGap="54px"
          withSwiper={true}
          paddingBlock="116px"
          companies={companies}
        />
      </Flex>
    </LayoutPage>
  );
}

export async function getServerSideProps() {
  let [companies, users] = await Promise.all([
    fetch(`${process.env.NEXT_API_URL}/companies`).then((res) => res.json()),
    fetch(`${process.env.NEXT_API_URL}/users`).then((res) => res.json()),
  ]);

  return {
    props: { companies, users },
  };
}

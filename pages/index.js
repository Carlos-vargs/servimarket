import dynamic from "next/dynamic";
import { Flex, } from "@chakra-ui/react";
import { request, gql } from "graphql-request";
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
            <Flex
                width="full"
                id="explore"
                backgroundColor="base"
            >
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

export async function getServerSideProps(ctx) {

    const { companies, users } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query companiesAndUsers{
            companies(limit: 20){
                id 
                name
                description
                productCount
            }
            users(limit: 20){
                id 
                name
            }
        }
        `,
        {
            id: ctx.query.id
        },

    )

    return {
        props: { companies, users }
    }
}

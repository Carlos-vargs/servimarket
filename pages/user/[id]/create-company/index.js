import dynamic from "next/dynamic";
import Wrapper from "@components/Wrapper";
import { Heading } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { gql, request } from "graphql-request";
import LayoutPage from "@components/LayoutPage";
const CompanyForm = dynamic(() => import("@components/CompanyForm"));

export default function CreateNewCompany({ categories }) {

    return (
        <LayoutPage titleHead="Create Company">
            <Wrapper
                paddingInline={['10px', '40px', '60px', '100px', '0']}
                marginInline="auto !important"
                paddingBlockStart="110px"
                justifyContent="center"
                paddingBlockEnd="60px"
                textAlign="center"
                direction="column"
                maxWidth="1073px"
                gridGap="60px"
                color="white"
                width="full"
            >
                <Heading
                    textTransform="capitalize"
                    fontSize={['50px', '50px', '50px', '60px', '60px']}
                >
                    create new company
                </Heading>
                <CompanyForm data={categories} />
            </Wrapper>
        </LayoutPage>
    );
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    if (session?.user.id !== ctx.query.id) {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }

    const { categories } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query categories{
            categories(limit: 20){
                id 
                name
            }
          }
        `,
    )

    return {
        props: { categories }
    }
}
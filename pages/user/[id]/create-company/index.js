import { Heading } from "@chakra-ui/react";
import CompanyForm from "@components/CompanyForm";
import LayoutPage from "@components/LayoutPage";
import Wrapper from "@components/Wrapper";
import { gql, request } from "graphql-request";
import { getSession } from "next-auth/react";

export default function CreateNewCompany({ categories }) {

    return (
        <LayoutPage titleHead="Create Company">
            <Wrapper
                color="white"
                direction="column"
                paddingBlockStart="110px"
                justifyContent="center"
                textAlign="center"
                gridGap="60px"
                paddingBlockEnd="60px"
            >
                <Heading
                    textTransform="capitalize"
                    fontSize={['50px', '50px', '50px', '60px', '60px']}
                >
                    create new company
                </Heading>
                <CompanyForm categories={categories} />
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
                destination: "/404"
            }
        }
    }

    const { categories } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query categories{
            categories{
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
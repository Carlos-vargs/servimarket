import { Heading } from "@chakra-ui/react";
import LayoutPage from "@components/LayoutPage";
import ServiceForm from "@components/ServiceForm";
import Wrapper from "@components/Wrapper";
import { gql, request } from "graphql-request";
import { getSession } from "next-auth/react";

export default function createNewService({ companies }) {
    return (
        <LayoutPage titleHead="Create Service">
            <Wrapper
                paddingBlockStart="110px"
                justifyContent="center"
                paddingBlockEnd="60px"
                direction="column"
                textAlign="center"
                gridGap="60px"
                color="white"
            >
                <Heading
                    textTransform="capitalize"
                    fontSize={['50px', '50px', '50px', '60px', '60px']}
                >
                    create new service
                </Heading>
                <ServiceForm companies={companies} />
            </Wrapper>
        </LayoutPage>
    );
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    const { me } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query me{
            me{
                companies{
                    id
                    name
                }
            }
        }
        `,
        {},
        {
            'Authorization': `Bearer ${session.token}`,
        }
    )

    if (!me || !session.user.id) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        }
    }

    const { companies } = me

    return {
        props: { companies }
    }
}
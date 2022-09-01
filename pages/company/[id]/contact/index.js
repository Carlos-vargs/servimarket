import dynamic from "next/dynamic";
import Wrapper from "@components/Wrapper";
import LayoutPage from "@components/LayoutPage";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { request, gql } from "graphql-request";
const ContactForm = dynamic(() => import("@components/ContactForm"));

export default function Contact({ company }) {

    return (
        <LayoutPage titleHead="Contact Us">
            <Wrapper
                paddingInline={['10px', '40px', '60px', '100px', '0']}
                marginInline="auto !important"
                paddingBlockStart="110px"
                justifyContent="center"
                paddingBlockEnd="60px"
                alignItems="center"
                textAlign="center"
                direction="column"
                maxWidth="1073px"
                gridGap="60px"
                color="white"
                width="full"
            >
                <VStack>
                    <Heading
                        textTransform="capitalize"
                        fontSize={['50px', '50px', '50px', '60px', '60px']}
                    >
                        get in touch
                    </Heading>
                    <Text maxWidth="744px" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nam eius soluta at labore ex cumque temporibus tempora! Ipsam id, eum voluptatum in consequuntur quasi cum neque
                    </Text>
                </VStack>
                <ContactForm emailTo={company?.user.email} />
            </Wrapper>
        </LayoutPage>
    );
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    if (!session?.token) {
        return {
            redirect: {
                permanent: false,
                destination: "/register"
            }
        }
    }

    const { company } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query company($id: ID!){
            company(id:$id){
                user{
                    email
                }
            }
        }
        `,
        {
            id: ctx.query.id
        },
        {
            'Authorization': `Bearer ${session?.token}`,
        }
    )

    if (!company) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        }
    }


    return {
        props: { company }
    }
}

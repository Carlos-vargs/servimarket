import dynamic from "next/dynamic";
import Wrapper from "@components/Wrapper";
import { getSession } from "next-auth/react";
import { request, gql } from "graphql-request";
import LayoutPage from "@components/LayoutPage";
import { Heading, Text, VStack } from "@chakra-ui/react";
const ProductList = dynamic(() => import("@components/ProductList"));

export default function Services({ products }) {
    return (
        <LayoutPage titleHead="Services">
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
                        Services
                    </Heading>
                    <Text maxWidth="744px">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nam eius soluta at labore ex cumque temporibus tempora! Ipsam id, eum voluptatum in consequuntur quasi cum neque
                    </Text>
                </VStack>
                <ProductList products={products} />
            </Wrapper>
        </LayoutPage>
    );
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    const { products } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query products{
            products{
                id 
                name 
                description
                avg
                usersRated{
                    id
                    name
                }
                hasRated
            }
        }
        `,
        {},
        {
            'Authorization': `Bearer ${session?.token}`,
        }
    )

    return {
        props: { products }
    }
}

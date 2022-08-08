import dynamic from "next/dynamic";
import Wrapper from "@components/Wrapper";
import { getSession } from "next-auth/react";
import { gql, request } from "graphql-request";
import LayoutPage from "@components/LayoutPage";
const ProductList = dynamic(() => import("@components/ProductList"));
const CompanyDetails = dynamic(() => import("@components/CompanyDetails"));

export default function Company({ company, products, categories }) {

    return (
        <LayoutPage titleHead={company.name}>
            <Wrapper
                marginInline="auto !important"
                justifyContent="center"
                paddingBlock="100px"
                direction="column"
                gridRowGap="30px"
                flexWrap="wrap"
                width="full"
            >
                <CompanyDetails company={company} categories={categories} />
                <ProductList products={products} />
            </Wrapper>
        </LayoutPage>
    );
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    const { company } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query company($id: ID!){
            company(id:$id){
                id 
                name
                description
                user{
                    id
                }
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
                categories{
                    id
                    name
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

    const { products, categories } = company

    return {
        props: { company, products, categories }
    }
}

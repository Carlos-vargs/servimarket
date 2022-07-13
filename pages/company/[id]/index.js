import CompanyDetails from "@components/CompanyDetails";
import Wrapper from "@components/Wrapper";
import ProductList from "@components/ProductList";
import LayoutPage from "@components/LayoutPage";
import { gql, request } from "graphql-request";

export default function Company({ company, products, categories }) {

    return (
        <LayoutPage titleHead={company.name}>
            <Wrapper
                marginInline="auto !important"
                justifyContent="center"
                flexWrap="wrap-reverse"
                paddingBlock="100px"
                gridGap="30px"
                width="full"
            >
                <ProductList products={products} />
                <CompanyDetails company={company} categories={categories} />
            </Wrapper>
        </LayoutPage>
    );
}

export async function getServerSideProps(ctx) {

    const { company } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query company($id: ID!){
            company(id:$id){
                id 
                name
                description
                products{
                    id 
                    name
                    description
                    avg
                    rating{
                        user{
                            id
                            name
                        }
                    }
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

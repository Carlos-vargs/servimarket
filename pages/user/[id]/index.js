import CompanyList from "@components/CompanyList";
import UserDetails from "@components/UserDetails";
import LayoutPage from "@components/LayoutPage";
import { gql, request } from "graphql-request";

export default function Profile({ user, companies }) {

    return (
        <LayoutPage titleHead={user.name}  >
            <UserDetails user={user} />
            <CompanyList companies={companies} />
        </LayoutPage>
    );

}

export async function getServerSideProps(ctx) {

    const { user } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          query user($id: ID!){
            user(id:$id){
                id
                name 
                email
                created_at
                companies{
                    id
                    name
                    description
                    productCount
                }
            }
          }
        `,
        {
            id: ctx.query.id
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
    )

    if (!user) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        }
    }

    const { companies } = user

    return {
        props: { user, companies }
    }
}

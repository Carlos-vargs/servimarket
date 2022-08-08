import dynamic from "next/dynamic";
import { gql, request } from "graphql-request";
import LayoutPage from '@components/LayoutPage'
const UserDetails = dynamic(() => import('@components/UserDetails'))
const CompanyList = dynamic(() => import('@components/CompanyList'))


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

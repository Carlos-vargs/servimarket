import dynamic from "next/dynamic";
import Wrapper from "@components/Wrapper";
import { Heading } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { gql, request } from "graphql-request";
import LayoutPage from "@components/LayoutPage";
const ServiceForm = dynamic(() => import("@components/ServiceForm"));

export default function createNewService({ companies }) {
  return (
    <LayoutPage titleHead="Create Service">
      <Wrapper
        paddingInline={["10px", "40px", "60px", "100px", "0"]}
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
        <Heading
          textTransform="capitalize"
          fontSize={["50px", "50px", "50px", "60px", "60px"]}
        >
          create new service
        </Heading>
        <ServiceForm companies={companies} />
      </Wrapper>
    </LayoutPage>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const { me } = await request(
    process.env.NEXT_PUBLIC_GRAPHQL_URL,
    gql`
      query me {
        me {
          companies {
            id
            name
          }
        }
      }
    `,
    {},
    {
      Authorization: `Bearer ${session?.token}`,
    }
  );

  if (!me || !session?.user.id) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const { companies } = me;

  return {
    props: { companies },
  };
}

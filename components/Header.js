import dynamic from "next/dynamic";
import Logo from "@components/Logo";
import { Flex } from "@chakra-ui/react";
import Wrapper from "@components/Wrapper";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { request, gql } from "graphql-request";
import { Hide, Show } from "@chakra-ui/media-query";
const DesktopNavigation = dynamic(
  () => import("@components/DesktopNavigation"),
  { ssr: false }
);
const MobileNavigation = dynamic(() => import("@components/MobileNavigation"), {
  ssr: false,
});

export default function Header() {
  const { data: session } = useSession();

  const navigation = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "explore",
      url: "/#explore",
    },
    {
      name: "services",
      url: "/services",
    },
    {
      name: "about",
      url: "/#about",
    },
  ];

  !session &&
    navigation.push(
      {
        name: "Log in",
        url: "/login",
      },
      {
        name: "Sign Up",
        url: "/register",
      }
    );

  async function handleSignOut() {
    try {
      const { status, message } = await request(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        gql`
          mutation logout {
            logout {
              status
              message
            }
          }
        `,
        {},
        {
          Authorization: `Bearer ${session?.token}`,
        }
      );

      console.log(status, message);

      signOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Flex
      top={0}
      zIndex={6}
      as="header"
      width="full"
      height="100px"
      position="sticky"
      background="hsla(219, 78%, 12%, .8)"
      backdropFilter="saturate(180%) blur(5px)"
      justifyContent="center"
    >
      <Wrapper width="full" alignItems="center" justifyContent="space-between">
        <Logo />
        <Hide above="lg">
          <MobileNavigation
            data={navigation}
            session={session}
            handleSignOut={handleSignOut}
          />
        </Hide>
        <Show above="lg">
          <DesktopNavigation
            data={navigation}
            session={session}
            handleSignOut={handleSignOut}
          />
        </Show>
      </Wrapper>
    </Flex>
  );
}

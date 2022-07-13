import Wrapper from "@components/Wrapper";
import { Heading, } from "@chakra-ui/react";
import { Hide, Show } from '@chakra-ui/media-query';
import DesktopNavigation from "@components/DesktopNavigation";
import MobileNavigation from "@components/MobileNavigation";


export default function Header({ session }) {

    const navigation = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Explore",
            url: "/explore",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Contact",
            url: "/contact",
        },
    ];

    !session && navigation.push(
        {
            name: "Log in",
            url: "/login",
        },
        {
            name: "Sign Up",
            url: "/register",
        }
    )

    return (
        <Wrapper
            width="full"
            height="100px"
            marginInline="auto"
            backgroundColor="base"
            alignItems="center"
            justifyContent="space-between"
        >
            <Heading color="white" textTransform="uppercase">serviplace</Heading>
            <Hide above="lg">
                <MobileNavigation data={navigation} session={session} />
            </Hide>
            <Show above="lg" >
                <DesktopNavigation data={navigation} session={session} />
            </Show>
        </Wrapper>
    );
}

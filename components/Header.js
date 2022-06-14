import { Flex, Heading, Image } from "@chakra-ui/react";
import { Hide, Show } from '@chakra-ui/media-query';
import DesktopNavigation from "@components/DesktopNavigation";
import MobileNavigation from "@components/MobileNavigation";


function Header() {

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


    return (
        <Flex
            w="full"
            h="100px"
            mx="auto"
            px={['20px', '26px', '50px', '100px', '196px']}
            maxW="1689px"
            bgColor="base"
            alignItems="center"
            justifyContent="space-between"
        >
            <Heading color="white">LOGO</Heading>
            <Hide above="md">
                <MobileNavigation data={navigation} />
            </Hide>
            <Show above="md" >
                <DesktopNavigation data={navigation} />
            </Show>

        </Flex>
    );
}

export default Header;
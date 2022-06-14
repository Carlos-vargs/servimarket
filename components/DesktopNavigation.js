import { Flex, Image } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import defaultProfile from "@images/user.png"


function DesktopNavigation({ data }) {
    return (
        <Flex gridGap="40px" alignItems="center" >
            {
                data.map(item =>
                    <NextChakraLink
                        color="white"
                        key={item.name}
                        href={item.url}
                        justifyContent="center"
                        textTransform="capitalize"
                        _hover={{ color: "base_pink" }}
                        transition="all .3s ease-in-out"
                    >
                        {item.name}
                    </NextChakraLink>
                )
            }
            <Image src={defaultProfile.src} borderRadius="full" w="48px" h="48px" objectFit="cover" />
        </Flex>
    );
}

export default DesktopNavigation;
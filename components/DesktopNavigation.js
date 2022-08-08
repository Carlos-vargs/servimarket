import NextChakraLink from "@components/NextChakraLink";
import AvatarPopover from "@components/AvatarPopover";
import { Flex } from "@chakra-ui/react";

export default function DesktopNavigation({ data, session, handleSignOut }) {

    return (
        <Flex gridGap="40px" alignItems="center">
            {
                data.map(item =>
                    <NextChakraLink
                        color="white"
                        key={item.name}
                        href={item.url}
                        whiteSpace="nowrap"
                        justifyContent="center"
                        textTransform="capitalize"
                        _hover={{ color: "base_pink" }}
                        _focus={{ color: "base_pink" }}
                        transition="all .3s ease-in-out"
                    >
                        {item.name}
                    </NextChakraLink>
                )
            }
            {
                session && <AvatarPopover handleSignOut={handleSignOut} session={session} />
            }
        </Flex>
    );
}

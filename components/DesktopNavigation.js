import { Avatar, Flex, Text } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import { signOut } from "next-auth/react";

export default function DesktopNavigation({ data, session }) {
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
            {
                session && <>
                    <Text
                        as="span"
                        color="white"
                        cursor="pointer"
                        justifyContent="center"
                        textTransform="capitalize"
                        _hover={{ color: "base_pink" }}
                        transition="all .3s ease-in-out"
                        onClick={signOut}
                    >
                        Log out
                    </Text>
                    <NextChakraLink href={`/user/${session.user.id}`}  >
                        <Avatar size="md" name={session?.user.name} />
                    </NextChakraLink>
                </>
            }

        </Flex>
    );
}

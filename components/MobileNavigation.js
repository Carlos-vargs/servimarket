import NextChakraLink from "@components/NextChakraLink";
import MenuIcon from "@icons/MenuIcon";
import { Avatar, Stack } from "@chakra-ui/react";
import { useState } from "react";
import NavMobile from "@components/NavMobile";
import { signOut } from "next-auth/react";

export default function MobileNavigation({ data, session }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <>
            <MenuIcon isOpen={isOpen} onClick={handleClick} />
            <Stack
                visibility={isOpen ? "visible" : "hidden"}
                transition="visibility .5s,opacity .5s"
                opacity={isOpen ? "1" : "0"}
                position="fixed"
                gridGap="50px"
                alignItems="center"
                overflowY="auto"
                backgroundColor="base_pink"
                paddingBlock="100px"
                zIndex="3"
                width="full"
                height="full"
                minHeight="100vh"
                left="0"
                top="0"
            >
                {
                    session && <NextChakraLink onClick={handleClick} href={`/user/${session.user.id}`} >
                        <Avatar size="2xl" name={session.user.name} />
                    </NextChakraLink>
                }
                {
                    data.map((item) => (
                        <NextChakraLink
                            key={item.name}
                            href={item.url}
                        >
                            <NavMobile>
                                {item.name}
                            </NavMobile>
                        </NextChakraLink>
                    ))
                }
                {
                    session && <NavMobile onClick={signOut} >Log out</NavMobile>
                }
            </Stack>
        </>
    );
}

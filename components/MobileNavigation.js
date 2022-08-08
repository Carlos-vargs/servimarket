import NextChakraLink from "@components/NextChakraLink";
import MenuIcon from "@icons/MenuIcon";
import { Avatar, Stack } from "@chakra-ui/react";
import { useState } from "react";
import NavMobile from "@components/NavMobile";

export default function MobileNavigation({ data, session, handleSignOut }) {

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
                    session && <NextChakraLink onClick={handleClick} title={session.user.name} href={{ pathname: '/user/[id]', query: { id: session.user.id }, }} >
                        <Avatar size="2xl" name={session.user.name} />
                    </NextChakraLink>
                }
                {
                    data.map((item) => (
                        <NextChakraLink
                            key={item.name}
                            href={item.url}
                            onClick={handleClick}
                        >
                            <NavMobile>
                                {item.name}
                            </NavMobile>
                        </NextChakraLink>
                    ))
                }
                {
                    session && <NavMobile onClick={handleSignOut}>
                        Log out
                    </NavMobile>
                }
            </Stack>
        </>
    );
}

import { Flex, HStack } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import data from "@public/SocialNetworkData";
import { nanoid } from "nanoid";

export default function SocialNetworkList() {

    return (
        <HStack spacing="12px" justifyContent="center" >
            {
                data.map(e => <NextChakraLink
                    key={nanoid()}
                    href={e.url}
                    color="white"
                    isExternal
                    width="40px"
                    height="40px"
                    display="flex"
                    alignItems="center"
                    borderRadius="full"
                    justifyContent="center"
                    title={e.socialNetwork}
                    boxShadow="0 0 0 48px rgba(255,255,255,.1) inset"
                    transition="all .3s ease-out"
                    _hover={{
                        color: "white",
                        boxShadow: "0 0 0 2px rgba(255,255,255,.1) inset",
                    }}
                    _focus={{
                        color: "white",
                        boxShadow: "0 0 0 2px rgba(255,255,255,.1) inset",
                    }}
                >
                    <Flex
                        paddingInlineStart={e.pl}
                        paddingBlockStart={e.pt}
                        height="20px"
                        width="20px"
                    >
                        {e.iconSvg}
                    </Flex>
                </NextChakraLink>
                )
            }
        </HStack>
    );
}


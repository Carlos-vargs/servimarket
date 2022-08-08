import NextChakraLink from "@components/NextChakraLink";
import { Flex, Text } from "@chakra-ui/react";

export default function NayNotice({ height = ['fit-content', 'fit-content', 'fit-content', '100px'], message, messageLink, url }) {
    return (
        <Flex
            textTransform="capitalize"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            cursor="pointer"
            height={height}
            fontSize="20px"
            flexWrap="wrap"
            gridGap="10px"
            color="white"
        >
            <Text>{message}</Text>
            {
                url && <NextChakraLink color="base_pink" href={url} >{messageLink}</NextChakraLink>
            }
        </Flex>
    );
}

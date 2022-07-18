import { Heading } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";

export default function Logo({ variant = "white", href = "/" }) {
    return (
        <>
            <NextChakraLink href={href}>
                <Heading color={variant} cursor="pointer" textTransform="uppercase">serviplace</Heading>
            </NextChakraLink>
        </>
    );
}
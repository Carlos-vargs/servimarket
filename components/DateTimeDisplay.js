import { Heading, Text, VStack } from "@chakra-ui/react";

export default function DateTimeDisplay({ value, type }) {
    return (
        <VStack spacing={0}>
            <Heading as="h2" fontSize="3rem" fontWeight={500} >{value}</Heading>
            <Text fontSize="13px" fontFamily="'Lexend', sans-serif" lineHeight="calc(28 / 16)">{type}</Text>
        </VStack>
    );
}

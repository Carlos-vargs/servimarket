import { Heading, Text, VStack } from "@chakra-ui/react";

export default function DataCount({ count, type }) {
    return (
        <VStack color="white" textTransform="uppercase" >
            <Heading as="h4" fontSize="24px" >
                {count}
                <Text as="span" color="base_pink" >+</Text>
            </Heading>
            <Heading as="h6" fontSize="14px" fontWeight="500" >
                {type}
            </Heading>
        </VStack>
    );
}

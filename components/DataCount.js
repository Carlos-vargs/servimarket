import { Heading, Highlight, VStack } from "@chakra-ui/react";

export default function DataCount({ count, type, query = "+" }) {
    return (
        <VStack color="white" textTransform="uppercase" >
            <Heading as="h4" fontSize="24px" >
                <Highlight query={query} styles={{ paddingInline: '1', color: 'base_pink' }}>
                    {count}
                </Highlight>
            </Heading>
            <Heading as="h6" fontSize="14px" fontWeight="500" >
                {type}
            </Heading>
        </VStack>
    );
}

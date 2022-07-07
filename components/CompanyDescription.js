import { Heading, Stack, Text } from "@chakra-ui/react";

export default function CompanyDescription({ name, description }) {
    return (
        <>
            {
                description && <Stack
                    gridGap="14px"
                    textAlign="center"
                    borderRadius="20px"
                    alignItems="center"
                    paddingBlock="44px"
                    backgroundColor="base_ligth"
                    width="full" height="252px"
                    paddingInline={['40px', '40px', '30px', '30px', '30px']}
                >
                    <Heading as="h3"
                        noOfLines={2}
                        fontSize="30px"
                        textAlign="center"
                        textTransform="capitalize"
                    >
                        {name} bio
                    </Heading>
                    <Text noOfLines={['3', '3', '4', '4', '4']}>
                        {description}
                    </Text>
                </Stack>
            }
        </>
    );
}

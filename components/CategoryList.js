import { Flex, Heading, Stack } from "@chakra-ui/react";

export default function CategoryList({ categories = [] }) {
    return (
        <>
            {
                categories.length !== 0 && <Stack color="white" >
                    <Heading as="h3"
                        fontSize="30px"
                        textTransform="capitalize"
                        textAlign={['center', 'center', 'center', 'center', 'left']}
                    >
                        categories
                    </Heading>
                    <Flex width="full" flexWrap="wrap"
                        gridGap="8px" paddingBlockStart="20px"
                        justifyContent={['center', 'center', 'center', 'center', 'flex-start',]}
                    >
                        {
                            categories.map((category) => <Flex
                                transition="color .3s ease-in-out"
                                justifyContent="center"
                                bgColor="base_ligth"
                                alignItems="center"
                                textAlign="center"
                                padding="6px 14px"
                                borderRadius="4px"
                                key={category.id}
                                cursor="pointer"
                                minWidth="90px"
                                _hover={{
                                    color: "base_pink"
                                }}
                            >
                                {category.name}
                            </Flex>
                            )
                        }
                    </Flex>
                </Stack>
            }
        </>
    );
}

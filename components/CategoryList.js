import { Flex, Stack } from "@chakra-ui/react";

export default function CategoryList({ categories = [] }) {
    return (
        <>
            {
                categories.length !== 0 && <Flex flexWrap="wrap"
                    color="white" gridGap="8px" padding="0 30px 44px"
                    justifyContent={['center', 'center', 'center', 'center', 'flex-start',]}
                >
                    {
                        categories.map((category) => <Flex
                            transition="color .3s ease-in-out"
                            justifyContent="center"
                            bgColor="base"
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
            }
        </>
    );
}

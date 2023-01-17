import { Flex, Heading } from "@chakra-ui/react";

export default function CategoryList({ categories = [], title }) {
  return (
    <>
      {categories.length !== 0 && (
        <>
          {title && (
            <Heading
              as="h3"
              noOfLines={2}
              fontSize="30px"
              textAlign="center"
              textTransform="capitalize"
            >
              {title}
            </Heading>
          )}
          <Flex
            flexWrap="wrap"
            color="white"
            gridGap="8px"
            justifyContent={[
              "center",
              "center",
              "center",
              "center",
              "flex-start",
            ]}
          >
            {categories.map((category) => (
              <Flex
                transition="color .3s ease-in-out"
                justifyContent="center"
                backgroundColor="base"
                alignItems="center"
                textAlign="center"
                padding="6px 14px"
                borderRadius="4px"
                key={category.id}
                cursor="pointer"
                minWidth="90px"
                _hover={{
                  color: "base_pink",
                }}
              >
                {category.name}
              </Flex>
            ))}
          </Flex>
        </>
      )}
    </>
  );
}

import { Heading, VStack } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import { nanoid } from "nanoid";

export default function FooterDataList({ data, title }) {
  return (
    <VStack alignItems={["center", "center", "center", "center", "flex-start"]}>
      <Heading as="h4" fontSize="24px">
        {title}
      </Heading>
      <VStack
        alignItems={["center", "center", "center", "center", "flex-start"]}
        spacing="12px"
      >
        {data.map((e) => (
          <NextChakraLink
            _hover={{ color: "base_pink" }}
            _focus={{ color: "base_pink" }}
            transition="all .3s ease-in-out"
            href={e.href}
            key={nanoid()}
          >
            {e.name}
          </NextChakraLink>
        ))}
      </VStack>
    </VStack>
  );
}

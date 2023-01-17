import { Heading, Stack, Text } from "@chakra-ui/react";

export default function CompanyDescription({ name, description }) {
  return (
    <>
      {description && (
        <Stack
          gridGap="14px"
          textAlign="center"
          borderRadius="20px"
          alignItems="center"
          backgroundColor="base_ligth"
        >
          <Heading
            as="h3"
            noOfLines={2}
            fontSize="30px"
            textAlign="center"
            textTransform="capitalize"
          >
            {name} bio
          </Heading>
          <Text margin="0 !important" noOfLines={["3", "3", "4", "4", "4"]}>
            {description}
          </Text>
        </Stack>
      )}
    </>
  );
}

import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import ThreeArrowIcon from "@icons/ThreeArrowIcon";

export default function GuideItem({ data }) {
  const { icon, title, opacity } = data;

  return (
    <VStack position="relative" spacing="28px" color="white">
      <Box
        top="calc(50% - 20px)"
        position="absolute"
        left="calc(-28%)"
        opacity={opacity}
      >
        <ThreeArrowIcon />
      </Box>
      <VStack
        width="190px"
        height="190px"
        borderRadius="20px"
        alignItems="center"
        justifyContent="center"
        backgroundColor="base_ligth"
      >
        <Flex alignItems="center" justifyContent="center" boxSize="100px">
          {icon}
        </Flex>
      </VStack>
      <Heading as="h5" fontSize="20px" textTransform="capitalize">
        {title}
      </Heading>
    </VStack>
  );
}

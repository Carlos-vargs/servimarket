import { Flex, HStack, Image, VStack } from "@chakra-ui/react";
import SocialNetworkList from "@components/SocialNetworkList";
import DateTimeDisplay from "@components/DateTimeDisplay";
import NextChakraLink from "@components/NextChakraLink";
import { useCountdown } from "hooks/useCountdown";
import comingSoon from "@images/coming-soon.png";
import Newsletter from "@components/Newsletter";

export default function ShowCounter({ targetDate = "2023-12-15" }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <Flex
      minHeight="100vh"
      backgroundColor="base"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        spacing={0}
        width="full"
        color="white"
        gridGap="54px"
        height={["auto", "auto", "auto", "587px"]}
        maxWidth="1296px"
        borderRadius="12px"
        paddingBlock="94px 100px"
        justifyContent="flex-start"
        backgroundColor="base_ligth"
        paddingInline={["44px", "44px", "44px", "80px"]}
      >
        <HStack
          spacing={0}
          gridGap={["20px", "20px", "20px", "120px"]}
          flexWrap="wrap"
          justifyContent="center"
        >
          <DateTimeDisplay value={days} type="Day (s)" />
          <DateTimeDisplay value={hours} type="Hour (s)" />
          <DateTimeDisplay value={minutes} type="Minute (s)" />
          <DateTimeDisplay value={seconds} type="Second (s)" />
        </HStack>
        <NextChakraLink href="/">
          <Image src={comingSoon.src} objectFit="cover" alt="coming soon" />
        </NextChakraLink>
        <VStack width="full" gridGap="30px">
          <Newsletter variant="input" />
          <SocialNetworkList />
        </VStack>
      </VStack>
    </Flex>
  );
}

import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import background from "@images/background-01.png";
import Head from "next/head";

export default function LayoutForm({
  title,
  linkName,
  message,
  url,
  children,
  width = "520px",
  height = "579px",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex
        backgroundImage={`url(${background.src})`}
        backgroundPosition="left"
        justifyContent="center"
        backgroundSize="cover"
        alignItems="center"
        minHeight="100vh"
        width="full"
      >
        <Stack
          alignItems="center"
          backgroundColor="base_ligth"
          borderRadius="10px"
          padding="50px 45px 60px"
          color="white"
          height={height}
          width={width}
        >
          <Heading
            fontSize="60px"
            marginBlockEnd="8px"
            lineHeight="heading"
            textTransform="capitalize"
          >
            {title}
          </Heading>
          <Flex
            direction={["column", "column", "row", "row", "row"]}
            textAlign={["center", "center", "left", "left", "left"]}
          >
            <Text as="span" paddingInlineEnd="8px">
              {message}
            </Text>
            <NextChakraLink href={url} color="base_pink">
              {linkName}
            </NextChakraLink>
          </Flex>
          {children}
        </Stack>
      </Flex>
    </>
  );
}

import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import HomeIcon from "@icons/HomeIcon";
import statusCodeNotFound from "@images/404.png";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Flex
        backgroundColor="base"
        width="full"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <Stack
          padding={[
            "30px 40px 28px",
            "30px 120px 60px",
            "30px 120px 60px",
            "44px 80px 60px",
            "94px 80px 100px",
          ]}
          width="full"
          marginInline={["0px", "0px", "116px", "116px", "116px"]}
          spacing={["0px", "0px", "0px", "150px", "150px"]}
          borderRadius="10px"
          backgroundColor="base_ligth"
          maxWidth="1294px"
          minWidth="320px"
        >
          <Flex
            alignItems={[
              "center",
              "center",
              "center",
              "flex-start",
              "flex-start",
            ]}
            textAlign={["center", "center", "center", "left", "left"]}
            direction={["column", "column", "column", "row", "row"]}
            gridGap={["40px", "40px", "40px", "0px", "0px"]}
          >
            <Stack
              paddingInlineEnd={["0px", "0px", "0px", "46px", "46px"]}
              gridGap="10px"
            >
              <Heading as="h2" fontSize="36px">
                {"Don't Cry"}
              </Heading>
              <NextChakraLink
                justifyContent={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
                marginInline={["auto", "auto", "0px", "0px", "0px"]}
                alignItems="baseline"
                display="flex"
                gridGap="8px"
                href="/"
              >
                <HomeIcon backgroundColor="#ff0076" />
                <Text>Back Home</Text>
              </NextChakraLink>
            </Stack>
            <Stack
              paddingInlineStart={["0px", "0px", "0px", "46px", "46px"]}
              borderInlineStart={[
                "none",
                "none",
                "none",
                "1px solid rgba(255,255,255,.2)",
                "1px solid rgba(255,255,255,.2)",
              ]}
            >
              <Heading as="h2" fontSize="24px">
                {"It's just a 404 error...!"}
              </Heading>
              <Text noOfLines={[4, 4, 4, 3, 3]} maxWidth="326px">
                The page you are looking for is not available in the moments
                please try to anothers away thank you!
              </Text>
            </Stack>
          </Flex>
          <Image
            src={statusCodeNotFound.src}
            alt="404"
            width="700px"
            height="250px"
            alignSelf="flex-end"
            objectFit="contain"
          />
        </Stack>
      </Flex>
    </>
  );
}

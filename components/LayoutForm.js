import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import background from "@images/background-01.png";
import Head from "next/head";


function LayoutForm({ title, linkName, message, url, children, width = "520px", height = "579px" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Flex
                bgImg={`url(${background.src})`}
                justifyContent="center"
                bgAttachment="fixed"
                alignItems="center"
                bgPosition="left"
                bgSize="cover"
                minH="100vh"
                w="full"
            >
                <Stack
                    alignItems="center"
                    bgColor="base_ligth"
                    borderRadius="10px"
                    p="50px 45px 60px"
                    color="white"
                    h={height}
                    w={width}
                >
                    <Heading fontSize="60px" mb="7px" lineHeight="1" fontWeight="600" textTransform="capitalize">{title}</Heading>
                    <Flex direction={['column', 'column', 'row', 'row', 'row']} textAlign={['center', 'center', 'left', 'left', 'left']}>
                        <Text as="span" pr="4px" >{message}</Text>
                        <NextChakraLink href={url} color="base_pink" >
                            {linkName}
                        </NextChakraLink>
                    </Flex>
                    {children}
                </Stack>
            </Flex>
        </>
    );
}

export default LayoutForm;
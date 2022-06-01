import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import background from "@images/background-01.png";
import LoginForm from "@components/LoginForm";
import Head from "next/head";

function Login() {
    return <>
        <Head>
            <title>Login</title>
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
                h="579px"
                w="520px"
            >
                <Heading fontSize="60px" mb="7px" lineHeight="1" fontWeight="600" >Login</Heading>
                <Flex direction={['column', 'column', 'row', 'row', 'row']} textAlign={['center', 'center', 'left', 'left', 'left']}>
                    <Text as="span" pr="4px" >Don't have an account yet?</Text>
                    <NextChakraLink href="/register" color="base_pink" >
                        Register Now!
                    </NextChakraLink>
                </Flex>
                <LoginForm />
            </Stack>
        </Flex>
    </>;
}

export default Login;
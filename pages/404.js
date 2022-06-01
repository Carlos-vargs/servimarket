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
            <Flex bgColor="base" w="full" minH="100vh" justifyContent="center" alignItems="center" color="white">
                <Stack
                    p={['30px 40px 28px', '30px 120px 60px', '30px 120px 60px', '44px 80px 60px', '94px 80px 100px']}
                    w="full" mx={['0px', '0px', '116px', '116px', '116px']}
                    spacing={['0px', '0px', '0px', '150px', '150px']}
                    borderRadius="10px"
                    bgColor="base_ligth"
                    maxWidth="1294px"
                    minW="320px"
                >
                    <Flex
                        alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
                        textAlign={['center', 'center', 'center', 'left', 'left']}
                        direction={['column', 'column', 'column', 'row', 'row']}
                        gridGap={['40px', '40px', '40px', '0px', '0px']}
                    >
                        <Stack pr={['0px', '0px', '0px', '46px', '46px']} gridGap="10px">
                            <Heading as="h2" fontSize="36px" fontWeight="600">Don't Cry</Heading>
                            <NextChakraLink
                                justifyContent={['center', 'center', 'center', 'flex-start', 'flex-start',]}
                                mx={['auto', 'auto', '0px', '0px', '0px']}
                                alignItems="baseline"
                                display="flex"
                                gridGap="8px"
                                href="/"
                            >
                                <HomeIcon bgColor="#ff0076" />
                                <Text >Back Home</Text>
                            </NextChakraLink>
                        </Stack>
                        <Stack
                            pl={['0px', '0px', '0px', '46px', '46px']}
                            borderLeft={['none', 'none', 'none',
                                '1px solid rgba(255,255,255,.2)',
                                '1px solid rgba(255,255,255,.2)'
                            ]}
                        >
                            <Heading as="h2" fontSize="24px" fontWeight="600" >It's just a 404 error...!</Heading>
                            <Text lineHeight="calc(28/16)" noOfLines={[4, 4, 4, 3, 3]} maxW="326px" >
                                The page you are looking for is not available in the moments please try to anothers away thank you!
                            </Text>
                        </Stack>
                    </Flex>
                    <Image src={statusCodeNotFound.src} w="700px" h="250px" alignSelf="flex-end" objectFit="contain" />
                </Stack>
            </Flex>
        </>
    );
}
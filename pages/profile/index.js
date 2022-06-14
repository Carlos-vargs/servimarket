import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import CustomInput from "@components/CustomInput";
import background from '@images/background-01.png';
import defaultProfile from '@images/default-profile.png';
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@components/Header"), { ssr: false });

function Profile() {
    return (
        <Stack
            bgColor="base"
            minH="100vh"
            w="full"
        >
            <Header />
            <Flex
                w="full"
                h="420px"
                bgSize={['cover', 'cover', '114%', '114%', '114%']}
                m="0 !important"
                bgRepeat="no-repeat"
                bgPosition={['center', 'center', '52% 76%', '52% 76%', '52% 76%']}
                bgImg={`url(${background.src})`}
            />

            <Flex
                px={['20px', '26px', '50px', '100px', '196px']}
                h="166px" m="0 !important"
                w="full"
                // alignItems="center"
                borderBottom="1px solid rgba(255,255,255,.1)"
                justifyContent={['center', 'center', 'space-between', 'space-between', 'space-between']}
            >
                <Stack
                    color="white"
                    textAlign="center"
                    textTransform="capitalize"
                    mt="-110px"
                    alignItems="center"
                    gridGap="14px"
                >
                    <Image src={defaultProfile.src}
                        objectFit="cover"
                        border="10px solid"
                        borderColor="base"
                        borderRadius="full"
                        w={['140px', '140px', '180px', '180px', '180px',]}
                        h={['140px', '140px', '180px', '180px', '180px',]}
                        alt="default profile"
                    />
                    <Stack>
                        <Heading as="h5" m="0" lineHeight="heading" fontSize="18px" >User name</Heading>
                        <Text as="span" m="0 !important" >Joined June 2022</Text>
                    </Stack>
                </Stack>

                hola


            </Flex>








            <Flex h="500px"></Flex>
            <Flex h="500px"></Flex>
            <Flex h="500px"></Flex>
            <Flex h="500px"></Flex>





        </Stack>
    );
}

export default Profile;
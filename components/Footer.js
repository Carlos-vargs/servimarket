import { Flex, Text, VStack } from "@chakra-ui/react";
import SocialNetworkList from "@components/SocialNetworkList";
import FooterDataList from "@components/FooterDataList";
import Wrapper from '@components/Wrapper';
import Logo from "@components/Logo";
import Newsletter from "@components/Newsletter";

export default function Footer() {

    const account = [
        { name: "profile", href: "/#" },
        { name: "my companies", href: "/#" },
        { name: "settings", href: "/#" },
        { name: "profile", href: "/#" },
    ]

    const serviplace = [
        { name: "All services", href: "/#" },
        { name: "Trading services", href: "/#" },
        { name: "Terms of Service", href: "/#" },
        { name: "Privacy Policy", href: "/#" },
    ]

    return <>
        <Flex
            backgroundColor="base_ligth"
            textTransform="capitalize"
            justifyContent="center"
            marginInline="auto"
            alignItems="center"
            color="white"
            width="full"
        >
            <Wrapper width="full" gridGap="56px" >
                <Flex paddingBlock="74px" gridGap="56px" >
                    <FooterDataList data={account} title="my account" />
                    <FooterDataList data={serviplace} title="serviplace" />
                    <Newsletter />
                </Flex>
                <VStack
                    alignItems="center"
                    padding="80px 16px"
                    bg="base_gradient"
                    textAlign="center"
                    maxWidth="352px"
                    spacing="38px"
                    height="410px"
                    w="full"
                >
                    <Logo />
                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Temporibus natus voluptatum delectus nam.
                    </Text>
                    <SocialNetworkList />
                </VStack>
            </Wrapper>
        </Flex>
        <Wrapper
            marginInline="auto !important"
            justifyContent="center"
            backgroundColor="base"
            alignItems="center"
            textAlign="center"
            color="white"
            height="80px"
            width="full"
        >
            © 2022. carlosvargs. Made With Love by Carlos Vargas
        </Wrapper>
    </>;
}

import SocialNetworkList from "@components/SocialNetworkList";
import FooterDataList from "@components/FooterDataList";
import { Flex, Text, VStack } from "@chakra-ui/react";
import Newsletter from "@components/Newsletter";
import Wrapper from '@components/Wrapper';
import Logo from "@components/Logo";

export default function Footer() {

    const account = [
        { name: "profile", href: "/#" },
        { name: "my companies", href: "/#" },
        { name: "settings", href: "/#" },
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
            <Wrapper
                width="full"
                gridGap="24px"
                flexWrap="wrap"
                paddingBlockEnd={['74px', '74px', '74px', '0', '0',]}
                justifyContent={['center', 'center', 'center', 'center', 'space-between',]}
            >
                <Flex paddingBlock="74px" gridGap="56px"
                    flexWrap="wrap" justifyContent={['center', 'center', 'center', 'center', 'flex-start',]}
                >
                    <FooterDataList data={account} title="my account" />
                    <FooterDataList data={serviplace} title="serviplace" />
                    <Newsletter />
                </Flex>
                <VStack
                    borderRadius={['md', 'md', 'md', '0', '0']}
                    background="base_gradient"
                    padding="80px 16px"
                    alignItems="center"
                    textAlign="center"
                    maxWidth="352px"
                    spacing="38px"
                    height="410px"
                    width="full"
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

import dynamic from "next/dynamic";
import Logo from "@components/Logo";
import Wrapper from '@components/Wrapper';
import { Flex, Text, VStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
const Newsletter = dynamic(() => import("@components/Newsletter"));
const FooterDataList = dynamic(() => import("@components/FooterDataList"));
const SocialNetworkList = dynamic(() => import("@components/SocialNetworkList"));

export default function Footer() {

    const { data: session } = useSession()
    const id = session?.user.id

    const account = [
        {
            name: "profile",
            href: id ? {
                pathname: '/user/[id]',
                query: { id },
            } : "/login"
        },
        {
            name: "my companies",
            href: id ? {
                pathname: '/user/[id]',
                query: { id },
            } : "/login"
        },
        {
            name: "settings",
            href: "/coming-soon"
        },
    ]

    const serviplace = [
        { name: "All services", href: "/coming-soon" },
        { name: "Trading services", href: "/coming-soon" },
        { name: "Terms of Service", href: "/coming-soon" },
        { name: "Privacy Policy", href: "/coming-soon" },
    ]

    return <>
        <Flex
            // marginBlockStart="0 !important"
            backgroundColor="base_ligth"
            textTransform="capitalize"
            justifyContent="center"
            marginInline="auto"
            alignItems="center"
            color="white"
            width="full"
            as="footer"
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

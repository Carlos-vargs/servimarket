import Head from "next/head";
import dynamic from "next/dynamic";
import { Flex, VStack } from "@chakra-ui/react";
import background from '@images/background-01.png';
const Header = dynamic(() => import("@components/Header"));
const Footer = dynamic(() => import("@components/Footer"));

export default function LayoutPage({ titleHead, children, coverImage = true }) {

    return <>
        <Head>
            <title>{titleHead}</title>
        </Head>
        <VStack
            backgroundColor="base"
            minHeight="100vh"
            width="full"
            height="full"
        >
            <Header />
            {
                coverImage && <Flex
                    width="full"
                    height="420px"
                    backgroundSize={['cover', 'cover', '114%', '114%', '114%']}
                    margin="0 !important"
                    backgroundRepeat="no-repeat"
                    backgroundPosition={['center', 'center', '52% 76%', '52% 76%', '52% 76%']}
                    backgroundImage={`url(${background.src})`}
                />
            }
            {children}
            <Footer />
        </VStack>
    </>;
}

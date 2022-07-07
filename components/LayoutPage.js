import Head from "next/head";
import dynamic from "next/dynamic";
import { Flex, Stack } from "@chakra-ui/react";
import background from '@images/background-01.png';
import { useSession } from "next-auth/react";
const Header = dynamic(() => import("@components/Header"), { ssr: false });


export default function LayoutPage({ titleHead, children }) {

    const { data: session } = useSession()

    return (
        <>
            <Head>
                <title>{titleHead}</title>
            </Head>
            <Stack
                backgroundColor="base"
                minHeight="100vh"
                width="full"
                height="full"
            >
                <Header session={session} />
                <Flex
                    width="full"
                    height="420px"
                    backgroundSize={['cover', 'cover', '114%', '114%', '114%']}
                    margin="0 !important"
                    backgroundRepeat="no-repeat"
                    backgroundPosition={['center', 'center', '52% 76%', '52% 76%', '52% 76%']}
                    backgroundImage={`url(${background.src})`}
                />
                {children}
            </Stack>
        </>
    );
}

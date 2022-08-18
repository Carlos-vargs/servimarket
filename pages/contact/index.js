import dynamic from "next/dynamic";
import Wrapper from "@components/Wrapper";
import LayoutPage from "@components/LayoutPage";
import { Heading, Text, VStack } from "@chakra-ui/react";
const ContactForm = dynamic(() => import("@components/ContactForm"));


export default function Contact() {
    return (
        <LayoutPage titleHead="Contact Us">
            <Wrapper
                paddingInline={['10px', '40px', '60px', '100px', '0']}
                marginInline="auto !important"
                paddingBlockStart="110px"
                justifyContent="center"
                paddingBlockEnd="60px"
                alignItems="center"
                textAlign="center"
                direction="column"
                maxWidth="1073px"
                gridGap="60px"
                color="white"
                width="full"
            >
                <VStack>
                    <Heading
                        textTransform="capitalize"
                        fontSize={['50px', '50px', '50px', '60px', '60px']}
                    >
                        get in touch
                    </Heading>
                    <Text maxWidth="744px" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nam eius soluta at labore ex cumque temporibus tempora! Ipsam id, eum voluptatum in consequuntur quasi cum neque
                    </Text>
                </VStack>
                <ContactForm />
            </Wrapper>
        </LayoutPage>
    );
}
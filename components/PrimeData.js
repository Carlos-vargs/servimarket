import { Button, ButtonGroup, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import DiscoverIcon from "@icons/DiscoverIcon";
import DataCount from "@components/DataCount";
import Wrapper from "@components/Wrapper";
import CheckIcon from "@icons/CheckIcon";

import Particles from "react-tsparticles";
import particleConfig from '@public/ParticleConfig.json'
import NextChakraLink from "@components/NextChakraLink";

export default function PrimeData() {

    return (
        <Flex
            width="full"
            height="670px"
            position="relative"
            backgroundColor="base_ligth"
            marginBlockStart="0 !important"
        >
            <Particles className="customParticles" params={particleConfig} />
            <Wrapper
                marginInline="auto !important"
                justifyContent="center"
                paddingBlock="100px"                                    
                alignItems="center"
                direction="column"
                flexWrap="wrap"
                gridGap="30px"
                width="full"
            >
                <VStack alignItems="center" textAlign="center" gridGap="40px">
                    <Heading fontSize={['50px', '50px', '50px', '72px']} letterSpacing="-3px" color="white">
                        Create & Sell on <br />
                        <Text as="span" color="base_pink"> Service </Text>
                        Market
                    </Heading>
                    <Flex gridGap="30px">
                        <DataCount count="3k" type="users" />
                        <DataCount count="18k" type="companies" />
                        <DataCount count="20k" type="services" />
                    </Flex>
                    <ButtonGroup gridGap="30px" flexWrap="wrap" justifyContent="center" >
                        <NextChakraLink href="/#explore">
                            <Button leftIcon={<DiscoverIcon />}>explore</Button>
                        </NextChakraLink>
                        <NextChakraLink href="/coming-soon">
                            <Button
                                color="white"
                                variant="outline"
                                padding="24px 29px"
                                borderColor="white"
                                leftIcon={<CheckIcon />}
                            >
                                hire a service
                            </Button>
                        </NextChakraLink>
                    </ButtonGroup>
                </VStack>
            </Wrapper>
        </Flex>
    );
}

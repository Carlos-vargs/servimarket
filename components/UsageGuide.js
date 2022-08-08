import { Flex, Heading } from "@chakra-ui/react";
import GuideItem from "@components/GuideItem";
import Wrapper from "@components/Wrapper";
import BuildingIcon from "@icons/BuildingIcon";
import ServiceIcon from "@icons/ServiceIcon";
import TruckIcon from "@icons/TruckIcon";
import UserPlusIcon from "@icons/UserPlusIcon";
import { nanoid } from "nanoid";

export default function UsageGuide() {

    const guideSteps = [
        {
            title: "Create an account",
            icon: <UserPlusIcon />,
            opacity: 0,
        },
        {
            title: "Create a company",
            icon: <BuildingIcon />,
            opacity: [0, 1, 1, 1],

        },
        {
            title: "Create a service",
            icon: <ServiceIcon />,
            opacity: [0, 0, 1, 1],

        },
        {
            title: "Sell your service",
            icon: <TruckIcon />,
            opacity: [0, 1, 1, 1],

        },
    ]

    return (
        <Wrapper
            marginInline="auto !important"
            paddingBlock="106px"
            textAlign="center"
            direction="column"
            gridGap="54px"
            color="white"
            width="full"
            id="about"
        >
            <Heading textTransform="capitalize" fontSize="36px" as="h2" >create & sell your services</Heading>
            <Flex gridGap="76px" justifyContent="center" flexWrap="wrap" >
                {
                    guideSteps.map(e => <GuideItem
                        key={nanoid()}
                        data={e}
                    />)
                }
            </Flex>
        </Wrapper>
    );
}


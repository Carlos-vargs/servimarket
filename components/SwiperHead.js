import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import ArrowIcon from "@icons/ArrowIcon";
import { useSwiper } from "swiper/react";

export default function SwiperHead({ title, navigation = true }) {

    const swiper = useSwiper();

    return (
        <Flex justifyContent={navigation ? "space-between" : "center"} width="full" alignItems="center" gap="30px" >
            <Heading textTransform="capitalize" fontSize="36px" as="h2" noOfLines={1}>{title}</Heading>
            {
                navigation && <ButtonGroup
                    variant="outline"
                    gridGap="10px"
                >
                    <Button transform="rotate(180deg)" padding="8px" onClick={() => swiper.slidePrev()}>
                        <ArrowIcon />
                    </Button>
                    <Button padding="8px" onClick={() => swiper.slideNext()} >
                        <ArrowIcon />
                    </Button>
                </ButtonGroup>
            }
        </Flex>
    );
}

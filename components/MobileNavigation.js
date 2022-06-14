import { Flex } from "@chakra-ui/react";
import MenuIcon from "@icons/MenuIcon";

function MobileNavigation({ data }) {
    return (
        <Flex w="44px" h="44px" color="white">
            <MenuIcon />
        </Flex>
    );
}

export default MobileNavigation;
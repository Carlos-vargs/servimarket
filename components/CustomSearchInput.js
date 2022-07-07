import { Flex, Input } from "@chakra-ui/react";
import SearchIcon from "@icons/SearchIcon";

export default function CustomSearchInput({ height = "42px", ...props }) {
    return (
        <Flex
            backgroundColor="base_ligth"
            border="1px solid #585c75"
            maxWidth={['fit-content', 'fit-content', '300px', '300px', '300px']}
            borderRadius="50px"
            alignItems="center"
            paddingInline="22px"
            minWidth="200px"
            height={height}
            {...props}
            overflow="hidden"
            color="rgba(255,255,255,.4)"
        >
            <Input
                boxShadow="none !important "
                border="none"
                width="full"
                placeholder="Search"
                height="full"
                paddingInline="0px"
            />
            <SearchIcon w="18" h="20" />
        </Flex>
    );
}

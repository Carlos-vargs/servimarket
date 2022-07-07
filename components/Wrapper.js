import { Flex } from "@chakra-ui/react";

export default function Wrapper({ children, direction, ...props }) {
    return (
        <Flex
            {...props}
            maxWidth="1689px"
            direction={direction}
            paddingInline={['20px', '40px', '60px', '100px', '120px', '196px']}
        >
            {children}
        </Flex>
    );
}


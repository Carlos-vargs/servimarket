import { Flex } from "@chakra-ui/react";

export default function Wrapper({
    paddingInline = ['20px', '40px', '60px', '100px', '120px', '196px'],
    maxWidth = "1689px",
    direction,
    children,
    ...props }) {
    return (
        <Flex
            {...props}
            maxWidth={maxWidth}
            direction={direction}
            paddingInline={paddingInline}
        >
            {children}
        </Flex>
    );
}


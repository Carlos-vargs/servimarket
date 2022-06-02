import { Button } from "@chakra-ui/react";

function CustomButton({ children, ...rest }) {
    return (
        <Button
            bg="linear-gradient(45deg,#590f87 0,#ff0076 50%,#590f87 100%)"
            _hover={{ bgPosition: "100% 0%" }}
            fontFamily="'Lexend', sans-serif"
            transition="all .3s ease-in-out"
            textTransform="uppercase"
            borderRadius="50px"
            bgSize="200% 100%"
            boxShadow="none"
            fontSize="14px"
            p="25px 29px"
            gridGap="6px"
            {...rest}
        >
            {children}
        </Button>
    );
}

export default CustomButton;
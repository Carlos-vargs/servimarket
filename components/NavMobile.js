import { Flex } from "@chakra-ui/react";

export default function NavMobile({ children, ...rest }) {
  return (
    <Flex
      as="span"
      position="relative"
      fontSize="30px"
      color="white"
      alignItems="center"
      margin="0 !important"
      textTransform="capitalize"
      fontWeight="700"
      {...rest}
      _before={{
        content: '""',
        position: "absolute",
        top: "100%",
        backgroundColor: "#fff",
        width: "full",
        height: "2px",
        transformOrigin: "left",
        transform: "scaleX(0)",
        transition: "all .3s ease",
      }}
      _hover={{
        _before: {
          transform: "scaleX(1)",
        },
      }}
      _focus={{
        _before: {
          transform: "scaleX(1)",
        },
      }}
    >
      {children}
    </Flex>
  );
}

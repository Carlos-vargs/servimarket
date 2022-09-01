import { Box, Stack } from "@chakra-ui/react";
import menu from "../../styles/Menu.module.css";

export default function MenuIcon({ isOpen, onClick }) {

    return (
        <Stack
            as="button"
            zIndex="4"
            width="40px"
            gridGap="11px"
            outline="none"
            cursor="pointer"
            onClick={onClick}
            justifyContent="center"
        >
            {
                [1, 2, 3].map(i => (
                    <Box key={i}
                        as="span"
                        display="block"
                        width="full"
                        height="3px"
                        margin="0 !important"
                        backgroundColor="white"
                        borderRadius="4px"
                        transition="all .3s"
                        className={isOpen ? menu.open : menu.close}
                    />
                ))
            }
        </Stack>
    );
}
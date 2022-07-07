import { FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";

export default function CustomInput({ name, errors, title, ...rest }) {

    return (
        <FormControl isInvalid={errors}>
            <FormLabel htmlFor={name} marginBlockEnd="2" textTransform="capitalize" >{title}</FormLabel>
            <Input
                _invalid={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
                _focus={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
                backgroundColor="base"
                paddingInline="30px"
                paddingBlock="10px"
                border="none"
                height="56px"
                name={name}
                {...rest}
                id={name}
            />
            <FormErrorMessage justifyContent="flex-end" color="base_pink" position="absolute" right="0">{errors}</FormErrorMessage>
        </FormControl>
    );
}

import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

function CustomInput({ name, errors, title,  ...rest }) {
    return (
        <FormControl>
            <FormLabel htmlFor={name} mb="2" textTransform="capitalize" >{title}</FormLabel>
            <Input
                _focus={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
                bgColor="base"
                border="none"
                name={name}
                {...rest}
                id={name}
                px="30px"
                py="10px"
                h="56px"
            />
            {errors && <Text color="base_pink" position="absolute" right="0" mt="2">{errors}</Text>}
        </FormControl>
    );
}

export default CustomInput;
import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react";

export default function CustomTextTarea({ name, errors, title, ...rest }) {
    return (
        <FormControl isInvalid={errors}>
            <FormLabel htmlFor={name} marginBlockEnd="2" textTransform="capitalize" >{title}</FormLabel>
            <Textarea
                _invalid={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
                _focus={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
                backgroundColor="base"
                padding="20px 30px"
                height="210px" 
                border="none"
                name={name}
                {...rest}
                id={name}
            />
            <FormErrorMessage justifyContent="flex-end" color="base_pink" position="absolute" right="0">{errors}</FormErrorMessage>
        </FormControl>
    );
}


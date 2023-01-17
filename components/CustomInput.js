import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function CustomInput({
  name,
  errors,
  title,
  height = "56px",
  withTitle = true,
  ...rest
}) {
  return (
    <FormControl isInvalid={errors}>
      {withTitle && (
        <FormLabel htmlFor={name} marginBlockEnd="2" textTransform="capitalize">
          {title}
        </FormLabel>
      )}
      <Input
        _invalid={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
        _focus={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
        backgroundColor="base"
        padding="10px 30px"
        border="none"
        height={height}
        name={name}
        {...rest}
        id={name}
      />
      <FormErrorMessage
        justifyContent="flex-end"
        color="base_pink"
        position="absolute"
        right="0"
      >
        {errors}
      </FormErrorMessage>
    </FormControl>
  );
}

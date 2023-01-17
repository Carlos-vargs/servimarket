import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import MultiSelectTheme from "@public/MultiSelectTheme";
import makeAnimated from "react-select/animated";
import Select from "react-select";

export default function MultiSelect({
  name,
  width = "full",
  defaultCategory,
  errors,
  title,
  data,
  required,
  ...rest
}) {
  const dataFormatted = data.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  return (
    <FormControl isInvalid={errors} width={width}>
      <FormLabel htmlFor={name} marginBlockEnd="2" textTransform="capitalize">
        {title}
      </FormLabel>
      <Select
        id={name}
        {...rest}
        instanceId={name}
        options={dataFormatted}
        closeMenuOnSelect={false}
        styles={MultiSelectTheme}
        components={makeAnimated()}
      />
      <FormErrorMessage
        justifyContent="f lex-end"
        color="base_pink"
        position="absolute"
        right="0"
      >
        {errors}
      </FormErrorMessage>
    </FormControl>
  );
}

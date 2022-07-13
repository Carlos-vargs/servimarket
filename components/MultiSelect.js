import { color, Flex, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import MultiSelectTheme from "@components/MultiSelectTheme";

export default function MultiSelect({ name, errors, title, data, ...rest }) {

    const dataFormatted = data.map((e) => {
        return {
            value: e.id,
            label: e.name
        }
    })
    
    return (
        <FormControl isInvalid={errors}>
            <FormLabel htmlFor={name} marginBlockEnd="2" textTransform="capitalize" >{title}</FormLabel>
            <Select
                closeMenuOnSelect={false}
                components={makeAnimated()}
                styles={MultiSelectTheme}
                isMulti
                required
                id={name}
                instanceId={name}
                options={dataFormatted}
                {...rest}
            />
            <FormErrorMessage justifyContent="flex-end" color="base_pink" position="absolute" right="0">{errors}</FormErrorMessage>
        </FormControl>
    );
}

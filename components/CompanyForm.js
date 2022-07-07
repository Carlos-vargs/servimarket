import { Flex } from "@chakra-ui/react";
import CustomInput from "@components/CustomInput";

export default function CompanyForm() {
    return (
        <Flex color="white" backgroundColor="base_ligth" p="40px" w="full" h="full" >
            <CustomInput placeholder="test company"  name="test company" title="test company" />
        </Flex>
    )
}

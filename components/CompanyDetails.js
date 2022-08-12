import dynamic from "next/dynamic";
import { Flex, Stack } from "@chakra-ui/react";
import CategoryList from "@components/CategoryList";
import CompanyDescription from "@components/CompanyDescription";
const CompanyOptions = dynamic(() => import('@components/CompanyOptions'))


export default function CompanyDetails({ company, categories }) {

    return (
        <Flex
            backgroundColor="base_ligth"
            justifyContent="center"
            width="fit-content"
            borderRadius="20px"
            marginInline="auto"
            overflow="hidden"
            flexWrap="wrap"
            color="white"
        >
            <CompanyOptions name={company.name} ownerId={company.user.id} />
            {
                (company.description || categories) && <Stack
                    spacing="44px"
                    maxWidth="630px"
                    paddingBlock={['22px 44px', '22px 44px', '44px']}
                    paddingInline={['44px', '30px 44px', '30px 44px', '30px 44px', '30px 44px']}
                >
                    <CompanyDescription name={company.name} description={company.description} />
                    <CategoryList title={!company.description && "categories"} categories={categories} />
                </Stack>
            }
        </Flex>
    );
}

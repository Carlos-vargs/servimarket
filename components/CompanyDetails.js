import CompanyDescription from "@components/CompanyDescription";
import CompanyOptions from "@components/CompanyOptions";
import CategoryList from "@components/CategoryList";
import { Stack } from "@chakra-ui/react";

export default function CompanyDetails({ company, categories }) {
    return (
        <Stack
            color="white"
            gridGap="30px"
            maxWidth="640px"
            width={['auto', 'auto', 'auto', 'auto', '412px', '412px']}
        >
            <CompanyOptions name={company.name} />
            <CompanyDescription name={company.name} description={company.description} />
            <CategoryList categories={categories} />
        </Stack>
    );
}

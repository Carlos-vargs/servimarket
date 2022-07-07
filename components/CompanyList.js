import { SimpleGrid, Text } from "@chakra-ui/react";
import CompanyCard from "@components/CompanyCard";
import Wrapper from "@components/Wrapper";

export default function CompanyList({ companies }) {
    return (
        <Wrapper
            justifyContent="center"
            marginInline="auto !important"
            paddingBlock="60px"
            width="full"
        >
            <SimpleGrid textAlign="center" minChildWidth="280px" spacing='30px' width="full" justifyItems="center">
                {
                    companies.length !== 0
                        ? companies.map((company) => <CompanyCard key={company.id} company={company} />)
                        : <Text as="span" fontSize="24px" textTransform="capitalize" color="white" >no companies available yet</Text>
                }
            </SimpleGrid>
        </Wrapper>
    );
}

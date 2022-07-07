import { Avatar, Button, ButtonGroup, Heading, Stack } from "@chakra-ui/react";
import CustomSearchInput from "@components/CustomSearchInput";
import EllipsisIcon from "@icons/EllipsisIcon";
import ShareIcon from "@icons/ShareIcon";

export default function CompanyOptions({ name }) {
    return (
        <Stack
            gridGap="14px"
            padding="44px"
            textAlign="center"
            alignItems="center"
            borderRadius="20px"
            w="full" height="400px"
            backgroundColor="base_ligth"
        >
            <Avatar
                width="134px"
                height="134px"
                border="8px solid"
                borderRadius="full"
                name={name}
                borderColor="base !important"
            />
            <Heading
                as="h5"
                noOfLines={1}
                fontSize="18px"
                textTransform="capitalize"
            >
                {name}
            </Heading>
            <CustomSearchInput />
            <ButtonGroup
                variant="outline"
                gap="10px"
            >
                <Button padding="0">
                    <ShareIcon />
                </Button>
                <Button>
                    follow
                </Button>
                <Button padding="0">
                    <EllipsisIcon />
                </Button>
            </ButtonGroup>
        </Stack>
    );
}

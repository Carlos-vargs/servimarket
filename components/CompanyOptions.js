import { Avatar, Button, ButtonGroup, Heading, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Portal, Stack } from "@chakra-ui/react";
import CustomSearchInput from "@components/CustomSearchInput";
import NextChakraLink from "@components/NextChakraLink";
import EllipsisIcon from "@icons/EllipsisIcon";
import { useSession } from "next-auth/react";
import ShareIcon from "@icons/ShareIcon";

export default function CompanyOptions({ name, ownerId }) {

    const { data: session } = useSession()

    return (
        <Stack
            paddingInline={['20px', '44px']}
            backgroundColor="base_ligth"
            paddingBlock="44px"
            alignItems="center"
            borderRadius="20px"
            textAlign="center"
            gridGap="14px"
            height="400px"
        >
            <Avatar
                name={name}
                width="134px"
                height="134px"
                border="8px solid"
                borderRadius="full"
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
                <NextChakraLink href="/coming-soon" >
                    {
                        session?.user.id === ownerId
                            ? <Button>edit</Button>
                            : <Button>follow</Button>
                    }
                </NextChakraLink>
                <Popover>
                    <PopoverTrigger>
                        <Button variant="outline" padding="0">
                            <EllipsisIcon />
                        </Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent boxShadow="none !important" width="max-content" >
                            <PopoverArrow />
                            <PopoverBody textTransform="capitalize" paddingInline={0}>
                                {
                                    session?.user.id === ownerId && <NextChakraLink
                                        display="block" _hover={{ backgroundColor: "gray.100" }}
                                        paddingInline={3} href="/company/create-service"
                                    >
                                        create service
                                    </NextChakraLink>
                                }
                                <NextChakraLink display="block" href="#" _hover={{ backgroundColor: "gray.100" }} paddingInline="3">report</NextChakraLink>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>
            </ButtonGroup>
        </Stack>
    );
}

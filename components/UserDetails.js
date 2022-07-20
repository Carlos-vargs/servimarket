import { Avatar, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import AuthUserOptions from "@components/AuthUserOptions";
import { formatDistanceToNowStrict } from 'date-fns'
import Wrapper from "@components/Wrapper";

export default function UserDetails({ user }) {

    return (
        <Flex
            width="full"
            justifyContent="center"
            marginBlockStart="0 !important"
            borderBlockEnd="1px solid rgba(255,255,255,.1)"
            height={['280px', '280px', '220px', '220px', '134px']}
            // pb="40px"
        >
            <Wrapper
                width="full"
                gridGap="20px"
                alignItems="center"
                direction={["column", "column", "column", "column", "row"]}
                justifyContent={['center', 'center', 'center', 'center', 'space-between']}
            >
                <Stack
                    color="white"
                    textAlign="center"
                    textTransform="capitalize"
                    marginBlockStart="-154px"
                    alignItems="center"
                    gridGap="14px"
                >
                    <Avatar name={user.name}
                        width={['140px', '140px', '180px', '180px', '180px',]}
                        height={['140px', '140px', '180px', '180px', '180px',]}
                        borderColor="base !important"
                        border="10px solid"
                        borderRadius="full"
                    />
                    <Stack>
                        <Heading as="h5" margin="0" lineHeight="heading" fontSize="18px" >{user.name}</Heading>
                        <Text as="span" margin="0 !important" >Joined {formatDistanceToNowStrict(new Date(user.created_at), { addSuffix: true })}</Text>
                    </Stack>
                </Stack>
                <AuthUserOptions userId={user.id} />
            </Wrapper>
        </Flex>
    );
}

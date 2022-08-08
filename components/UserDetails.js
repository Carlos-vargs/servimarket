import dynamic from "next/dynamic";
import Wrapper from '@components/Wrapper';
import { formatDistanceToNowStrict } from 'date-fns'
import { Avatar, Flex, Heading, Stack, Text } from "@chakra-ui/react";
const AuthUserOptions = dynamic(() => import('@components/AuthUserOptions'))


export default function UserDetails({ user }) {

    return (
        <Flex
            width="full"
            justifyContent="center"
            marginBlockStart="0 !important"
            borderBlockEnd="1px solid rgba(255,255,255,.1)"
            height={['200px', '200px', '200px', '134px', '134px']}
        >
            <Wrapper
                width="full"
                gridGap="20px"
                alignItems="center"
                direction={['column', 'column', 'column', 'row', 'row']}
                justifyContent={['center', 'center', 'center', 'space-between', 'space-between']}
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
                        height={['140px', '140px', '180px', '180px', '180px',]}
                        width={['140px', '140px', '180px', '180px', '180px',]}
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

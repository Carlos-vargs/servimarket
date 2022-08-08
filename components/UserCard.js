import { Avatar, Button, Heading, Image, Stack, } from "@chakra-ui/react";
import defaultCompanyCover from "@images/default-cover.png";
import NextChakraLink from "@components/NextChakraLink";

export default function UserCard({ name, id }) {
    return (
        <NextChakraLink
            href={{
                pathname: '/user/[id]',
                query: { id },
            }}
            title={name}
        >
            <Stack
                color="white"
                width="190px"
                height="254px"
                minWidth="160px"
                borderRadius="20px"
                position="relative"
                alignItems="center"
                paddingBlockEnd="20px"
                backgroundColor="base"
                justifyContent="space-between"
            >
                <Image src={defaultCompanyCover.src} alignSelf="flex-start" alt="default background" width="full" />
                <Stack
                    alignItems="center"
                    textAlign="center"
                    top="calc(25% + 4px)"
                    transform="translateX(-50%)"
                    position="absolute"
                    left="50%"
                >
                    <Avatar cursor="pointer" size="lg" borderWidth="none" name={name} />
                    <Heading as="h5" fontSize="18px" textTransform="capitalize" noOfLines={2} >{name}</Heading>
                </Stack>
                <Button padding="0 22px" height="30px" width="126px" maxWidth="130px">view</Button>
            </Stack>
        </NextChakraLink>
    );
}

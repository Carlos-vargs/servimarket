import { Button, Flex } from "@chakra-ui/react";
import CreateIcon from "@icons/CreateIcon";
import NextChakraLink from "@components/NextChakraLink";
import CustomSearchInput from "@components/CustomSearchInput";
import { useSession } from "next-auth/react";

export default function AuthUserOptions({ userId }) {

    const { data: session } = useSession()

    return (
        <Flex gridGap="20px" flexWrap="wrap" justifyContent="center"  >
            {
                session?.user.id === userId && <NextChakraLink href={`/user/${userId}/create-company`}>
                    <Button variant="outline" rightIcon={<CreateIcon />}>create company</Button>
                </NextChakraLink>
            }
            <CustomSearchInput />
        </Flex>
    );
}

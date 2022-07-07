import { Box, Flex } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import { signOut, useSession } from "next-auth/react";


export default function Home() {

	const { data: session } = useSession()

	return (
		<Flex
			minHeight="100vh"
			width="full"
			backgroundColor="base"
		>


			{
				session ? <Box marginInline="20px" color="white" onClick={(e) => {
					e.preventDefault()

					return signOut()
				}}>
					Sign Out
				</Box>
					: <Flex gap="20px" >
						<NextChakraLink href="/login" color="base_pink" >
							Signin
						</NextChakraLink>
						<NextChakraLink href="/register" color="base_pink" >
							SignUp
						</NextChakraLink>
					</Flex>
			}

		</Flex>
	)
}

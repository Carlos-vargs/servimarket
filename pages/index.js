import { Box, Flex } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";
import { signOut } from "next-auth/react";


export default function Home() {
	return (
		<Flex
			minH="100vh"
			w="full"
			bgColor="base"
		>
			<NextChakraLink href="/api/auth/signin" color="base_pink" >
				login
			</NextChakraLink>

			<Box mx="20px" color="white" onClick={(e) => {
				e.preventDefault()

				return signOut()
			}}>
				Sign Out
			</Box>

		</Flex>
	)
}

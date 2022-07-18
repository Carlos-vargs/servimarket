import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import theme from '@public/ChakraTheme'
import '../styles/globals.css'

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {

	return (
		<SessionProvider session={session} >
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionProvider>
	)
}

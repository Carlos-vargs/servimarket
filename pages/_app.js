import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import theme from '@components/theme'
import '../styles/globals.css'

function MyApp({
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

export default MyApp

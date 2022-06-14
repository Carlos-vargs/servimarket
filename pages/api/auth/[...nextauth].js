import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			async authorize(credentials) {


				const config = {
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
					}
				}

				try {
					const { data } = await axios.post('http://127.0.0.1:8000/api/login', credentials, config)

					return data

				} catch (error) {
					console.log(error)
				}


			}
		})
	],
	pages: {
		signIn: "/login"
	},
	callbacks: {
		async jwt({ user, token }) {


			// if (typeof user !== typeof undefined) {
			// 	token.user = user;
			// }

			// if (user?.token) {
			// 	token.accessToken = user.token
			// }

			return token
		},
		async session({ session, user, token }) {

			session.accessToken = token.accessToken
			// session.user = user.

			console.log(user)



			return session
		}
	},
	// session: {
	// 	strategy: 'jwt',
	// },
	secret: "test",
})
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const DEFAULT_ID = "1";
const DEFAULT_NAME = "kunde";
const DEFAULT_EMAIL = "kunde@example.org"

export const AUTH_OPTIONS: NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 Days
        updateAge: 24 * 60 * 60 // 24 hours
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                id: { label: "Id", type: "text", placeholder: DEFAULT_ID, value: DEFAULT_ID },
                name: { label: "Benutzername", type: "text", placeholder: DEFAULT_NAME, value: DEFAULT_NAME },
                email: { label: "E-Mail", type: "text", placeholder: DEFAULT_EMAIL, value: DEFAULT_EMAIL },
            },
            authorize: async (credentials, _req) => {
                if (!credentials) {
                    return null;
                }
                return {
                    id: credentials.id || "1",
                    name: credentials.name,
                    email: credentials.email
                }
            }
        })
    ]
}

export default NextAuth(AUTH_OPTIONS)
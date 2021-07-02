import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default (req, res) => NextAuth(req, res, {
    providers: [
        Providers.Cognito({
            clientId: process.env.COGNITO_CLIENT_ID_MACROMATE,
            clientSecret: process.env.COGNITO_CLIENT_SECRET_MACROMATE,
            domain: process.env.COGNITO_DOMAIN_MACROMATE,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    username: profile.username,
                    image: null
                }
            }
        })
    ],
    callbacks: {
        async session(session, token) {
            session.user = { ...token, ...session.user };
            return session;
        }
    },
    debug: false // (process.env.NODE_ENV === 'development')
});

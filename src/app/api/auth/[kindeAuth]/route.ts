// @ts-ignore
// noinspection ExceptionCaughtLocallyJS

import { handleAuth, AuthResponse } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextApiRequest, NextApiResponse } from 'next';

async function handleKindeAuth(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const { kindeAuth } = req.query;

        // Await the handleAuth function call
        // @ts-ignore
        const authResponse: AuthResponse = await handleAuth(req, kindeAuth);

        // Check if authResponse is valid
        if (authResponse && authResponse.body && authResponse.status && authResponse.headers) {
            res.status(authResponse.status).setHeader('Content-Type', 'application/json').send(authResponse.body);
        } else {
            throw new Error('Invalid response from handleAuth');
        }
    } catch (error) {
        // Handle errors
        console.error('Error in handleAuth:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const route = {
    handler: handleKindeAuth
};

export default route;

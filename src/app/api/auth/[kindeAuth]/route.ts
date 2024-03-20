// @ts-ignore
import { handleAuth, AuthResponse } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export default async function handler(
    request: NextRequest,
    { params }: any
): Promise<void | Response> {
    const { kindeAuth } = params; // Assuming kindeAuth is a parameter passed in params object

    const authResponse: AuthResponse = handleAuth(request, kindeAuth);

    // Ensure that authResponse is valid
    if (!authResponse || !authResponse.body || !authResponse.status || !authResponse.headers) {
        // Handle the case where the response object or its properties are missing
        throw new Error('Invalid response from handleAuth');
    }

    return new NextResponse(authResponse.body, {
        status: authResponse.status,
        headers: authResponse.headers,
    });
}

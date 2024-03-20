import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: any
): Promise<void | Response> {
    const endpoint = params.kindeAuth;
    const [response] = await Promise.all([handleAuth(request, endpoint)]);
    return NextResponse.from(response);
}

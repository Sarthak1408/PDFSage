import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest } from 'next/server'

export async function GET(
    request: NextRequest,
    { params: {kindeAuth: endpoint} }: any
) {
    return handleAuth(request, endpoint)
}
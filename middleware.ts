import createMiddleware from 'next-intl/middleware'
import { authRoutes, defaultLocale, locales, protectedRoutesSegments } from './navigation'
import { NextResponse, NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale
})

export default async function middleware(req: NextRequest) {
    
    const [, locale, ...segments] = req.nextUrl.pathname.split('/')

    const token = await cookies().get('session')?.value

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    const session = token ? await jwtVerify(token, secret) : null
  
    if (!session && segments.some(sm => protectedRoutesSegments.includes(sm))) {
        return NextResponse.redirect(new URL(`/${locale}/auth/login`, req.url))
    }
    if (session && segments.some(sm => authRoutes.includes(sm))) {
        return NextResponse.redirect(new URL(`/${locale}/account`, req.url))
    }

    return intlMiddleware(req)
}
 
export const config = {
    matcher: ['/', '/(es|en)/:path*']
}
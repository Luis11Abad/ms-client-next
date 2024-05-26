import { createSharedPathnamesNavigation } from 'next-intl/navigation'
 
export const locales = ['es', 'en'] as const
 
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({locales})

export const authRoutes = ['login', 'register', 'recover', 'reset']
export const protectedRoutesSegments = ['account']
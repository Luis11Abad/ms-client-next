import { createSharedPathnamesNavigation } from 'next-intl/navigation'
 
export const defaultLocale = 'en'
export const locales = ['es', 'en', 'fr', 'it']
 
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({locales})

export const authRoutes = ['login', 'register', 'recover', 'reset']
export const protectedRoutesSegments = ['account']
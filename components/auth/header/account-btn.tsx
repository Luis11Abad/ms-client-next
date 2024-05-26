import { getUser } from "@/lib/dal"
import { Link } from "@/navigation"
import { getTranslations } from "next-intl/server"

export default async function AccountBtn() {
    const t = await getTranslations()
    const user = await getUser()

    return (
        user ? <Link href="/account">{user.name}</Link> : <Link href="/auth/login">{t('Auth.sign-in')}</Link>
    )
}
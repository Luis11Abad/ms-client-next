import { getUser } from "@/lib/dal"
import { getTranslations } from "next-intl/server"

import { Link } from "@/navigation"
import User from '@/components/ui/icons/user.svg'


export default async function AccountBtn() {
    const t = await getTranslations()
    const user = await getUser()

    const name = user ? user.name.split(' ')[0] : ''

    return (
        <Link className="flex items-center text-[13px] gap-x-1" href={user ? `/account` : `/auth/login`}><User/> <span className="ml-1">{user ? name : t('Auth.sign-in')}</span></Link>
    )
}
import { getUser } from "@/lib/dal"
import { useTranslations } from "next-intl"
import SignOutButton from "./sign-out-button"
import Book from "@/components/ui/icons/book.svg"
import Events from "@/components/ui/icons/events.svg"
import UserData from "@/components/ui/icons/user-data.svg"
import SideMenuButton from "./side-menu-button"

interface SideMenuLink {
    icon: React.ReactElement
    path: string
    textKey: string
}

export default async function SideMenu() {
    const t = useTranslations("Account")
    const user = await getUser()

    const links: SideMenuLink[] = [
        {
            icon: <UserData/>,
            path: '/account',
            textKey: 'personal-data'
        },
        {
            icon: <Events/>,
            path: '/account/events',
            textKey: 'my-events'
        },
        {
            icon: <Book/>,
            path: '/account/contacts',
            textKey: 'address-book'
        }
    ]
    return (
        <div className="flex flex-col flex-none w-full max-w-xs ">
            <h4 className="mt-6 mb-3 font-semibold">{t('hello', { name: user.name.split(' ')[0] })}</h4>
            <div className="w-full flex flex-col bg-white rounded-xl border overflow-hidden">
                {links.map(item => (<SideMenuButton key={item.path} icon={item.icon} path={item.path} text={t(item.textKey)}/>))}
                <SignOutButton label={t('sign-out')}/>
            </div>
        </div>
    )
}

import PersonalDataForm from "@/components/account/personal-data/form"
import { getUser } from "@/lib/dal"
import { getTranslations } from "next-intl/server"

export default async function Account() {
    const user = await getUser()
    const t = await getTranslations()
    
    return <>
        <PersonalDataForm user={user} translations={{ name: t('Auth.full-name'), email: t('Auth.email'), phone: t('Auth.phone'), submit: t('Account.save-changes')}}/>
    </>
}
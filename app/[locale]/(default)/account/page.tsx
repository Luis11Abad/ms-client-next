import SignOutButton from "@/components/account/sign-out-button"
import { useTranslations } from "next-intl"

export default function Account() {
    const t = useTranslations("Account")
    
    return (
        <>
            <h1>Account</h1>
            <SignOutButton label={t('sign-out')}/>
        </>
    )
}
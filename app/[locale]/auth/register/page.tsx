import { useTranslations } from "next-intl"

import { Link } from "@/navigation"
import RegisterForm from "@/components/auth/register/form"

export default function Register() {
    const t = useTranslations("Auth")

    return (
        <div className="w-full flex flex-col max-w-sm p-8 ">
            <RegisterForm translations={{ email: t('email'), name: t('full-name'), password: t('password'), submit: t('sign-up'), title: t('register-title')}}/>
            <p className="text-sm text-zinc-500 mt-6 text-center">{t('account-question')} <Link className="text-black underline" href={`/auth/login`}>{t('sign-in')}</Link>.</p>
        </div>
    )
}
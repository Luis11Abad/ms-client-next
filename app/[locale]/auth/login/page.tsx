import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import Facebook from "@/components/ui/icons/facebook.svg"
import LoginForm from "@/components/auth/login/form"
import { Link } from "@/navigation"
import GoogleBtn from "@/components/auth/login/google-btn"

export default function Login({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined } }) {
    const t = useTranslations()

    const error = searchParams.err ? t(`Errors.${searchParams.err}`) : null

    return (
        <>
            <div className="w-full flex flex-col max-w-sm p-8 ">
                <LoginForm externalError={error} translations={{ email: t('Auth.email'), password: t('Auth.password'), passwordAsk: t('Auth.forgot-your-password-question'), submit: t('Auth.sign-in'), title: t('Auth.login-title')}}/>
                <div className="flex mt-4 gap-x-4">
                    <GoogleBtn/>
                    <Button variant="outline" className="flex-1">
                        <Facebook/>
                    </Button>
                </div>
                <p className="text-sm text-zinc-500 mt-6 text-center">{t('Auth.no-account-question')} <Link className="text-black underline" href={`/auth/register`}>{t('Auth.sign-up')}</Link>.</p>
            </div>
        </>
    )
}
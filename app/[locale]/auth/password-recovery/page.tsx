import { useTranslations } from "next-intl"
import { Link } from "@/navigation"

import SendPasswordRecoveryForm from "@/components/auth/password-recovery/send-form"
import PasswordRecoveryForm from "@/components/auth/password-recovery/form"

export default function RecoverPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }){
    const t = useTranslations("Auth")
    const rid = searchParams.rid
    return (
        <div className="w-full flex flex-col max-w-sm p-8 ">
            {rid && <PasswordRecoveryForm translations={{
                instructions: t('password-recovery-instructions'),
                newPassword: t('new-password'),
                recoveryCode: t('recovery-code'),
                submit: t('password-recovery-submit'),
                title: t('password-recovery-title'),
            }}/>}
            {!rid && <SendPasswordRecoveryForm translations={{
                email: t('email'),
                instructions: t('send-password-recovery-instructions'),
                submit: t('send-password-recovery-submit'),
                title: t('password-recovery-title'),
            }}/>}
            <p className="text-sm text-zinc-500 mt-6 text-center">{t('remember-your-password-question')} <Link className="text-black underline" href={`/auth/login`}>{t('sign-in')}</Link>.</p>
        </div>
    )
}
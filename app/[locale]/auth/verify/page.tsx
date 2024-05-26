import { getUser } from "@/lib/dal"
import { redirect } from "@/navigation"
import { getTranslations } from "next-intl/server"

import ResendVerificationBtn from "@/components/auth/verify/resend-btn"
import VerificationForm from "@/components/auth/verify/form"


export default async function Verify() {
    const t = await getTranslations("Auth")

    const { email, isVerified } = await getUser()

    if(!email) redirect('/auth/login')
    if(isVerified) redirect('/account')

    return (
        <div className="w-full flex flex-col max-w-sm p-8 ">
            <VerificationForm translations={{
                instructions: t('verify-instructions'),
                submit: t('verify-submit'),
                title: t('verify-title'),
            }}/>
            <p className="text-sm text-zinc-500 mt-6 text-center">{t('no-received-code-question')} <ResendVerificationBtn label={t('resend')}/>.</p>
        </div>
    )
}
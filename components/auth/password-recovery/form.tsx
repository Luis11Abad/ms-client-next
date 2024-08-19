'use client'

import { useEffect, useState } from "react"
import { useFormStatus } from "react-dom"
import { Input } from "@/components/ui/input"
import { auth } from "@/lib/actions"
import { Button } from "../../ui/button"
import ErrorAlert from "../../ui/error-alert"
import { useSearchParams } from "next/navigation"
import { usePathname, useRouter } from "@/navigation"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../ui/input-otp"

interface Translations {
    instructions: string
    newPassword: string
    recoveryCode: string
    submit: string
    title: string
}

export default function PasswordRecoveryForm({ translations } : { translations: Translations }){
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const { pending } = useFormStatus()
    const [error, setError] = useState<string|undefined>()

    useEffect(() => {
        if(error != null) setTimeout(() => setError(undefined), 5000)
    }, [error])

    function submit(formData: FormData){
        setError(undefined)
        auth('send-password-recovery', formData).then(res => {
            if(res && res.statusCode >= 400) setError(res.message)
            else {
                const params = new URLSearchParams(searchParams)
                params.set('rid', res?.data.recoveryId)
                replace(`${pathname}?${params.toString()}`)
            }
        })
    }

    return (
        <form action={submit} className="flex flex-col w-full">
            <h1 className="text-2xl font-semibold mb-3">{translations.title}</h1>
            <p className="text-sm text-zinc-500 mb-5">{translations.instructions}</p>
            <p className="text-sm font-semibold mb-1.5">{translations.recoveryCode}</p>
            <InputOTP maxLength={6} name="code">
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
            <p className="text-sm font-semibold mt-4">{translations.newPassword}</p>
            <Input type="password" name="password" placeholder="*******"/>
            { error && <ErrorAlert error={error}/>}
            <Button className="mt-6" disabled={pending}>{translations.submit}</Button>
        </form>
    )
}
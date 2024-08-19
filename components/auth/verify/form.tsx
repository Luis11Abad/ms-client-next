'use client'

import { auth } from "@/lib/actions"
import { useEffect, useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import ErrorAlert from "../../ui/error-alert"

interface Translations {
    instructions: string
    submit: string
    title: string
}

export default function VerificationForm({ translations }: { translations: Translations }){
    const { pending } = useFormStatus()
    const [error, setError] = useState<string|undefined>()

    useEffect(() => {
        if(error != null) setTimeout(() => setError(undefined), 5000)
    }, [error])

    function submit(formData: FormData){
        setError(undefined)
        auth('verify', formData).then(res => {
            if(res && res.statusCode >= 400) setError(res.message)
        })
    }

    return (
        <form action={submit}>
            <h1 className="text-2xl font-semibold mb-3">{translations.title}</h1>
            <p className="text-sm text-zinc-500 mb-5">{translations.instructions}</p>
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
            { error && <ErrorAlert error={error}/>}
            <Button className="flex-1 w-full mt-7" disabled={pending}>{translations.submit}</Button>
        </form>
    )
}
'use client'

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Input } from "@/components/ui/input"
import { auth } from "@/lib/actions"
import { Button } from "../../ui/button"
import ErrorAlert from "../../ui/error-alert"
import { useSearchParams } from "next/navigation"
import { usePathname, useRouter } from "@/navigation"

interface Translations {
    email: string
    instructions: string
    submit: string
    title: string
}

export default function SendPasswordRecoveryForm({ translations } : { translations: Translations }){
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const { pending } = useFormStatus()
    const [error, setError] = useState<string|undefined>()

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

            <p className="text-sm font-semibold mb-1.5">{translations.email}</p>
            <Input type="text" name="email" placeholder="luka.absa@invitare.co"/>
            { error && <ErrorAlert error={error}/>}
            <Button className="mt-6" disabled={pending}>{translations.submit}</Button>
        </form>
    )
}
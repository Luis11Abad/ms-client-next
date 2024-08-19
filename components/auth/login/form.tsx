'use client'

import { useEffect, useState } from "react"
import { useFormStatus } from "react-dom"
import { Input } from "@/components/ui/input"
import { auth } from "@/lib/actions"
import { Button } from "../../ui/button"
import { Link } from "@/navigation"
import ErrorAlert from "../../ui/error-alert"

interface Translations {
    email: string
    password: string
    passwordAsk: string
    submit: string
    title: string
}

export default function LoginForm({ externalError, translations } : { externalError: string | null, translations: Translations }){
    const { pending } = useFormStatus()
    const [error, setError] = useState<string|undefined>()

    useEffect(() => {
        if (externalError) setError(externalError)
    }, [externalError])

    useEffect(() => {
        if(error != null) setTimeout(() => setError(undefined), 5000)
    }, [error])

    function submit(formData: FormData){
        setError(undefined)
        auth('login', formData).then(res => {
            if(res && res.statusCode >= 400) setError(res.message)
        })
    }

    return (
        <form action={submit} className="flex flex-col w-full">
            <h1 className="text-2xl font-semibold mb-6">{translations.title}</h1>
            <p className="text-sm font-semibold mb-1.5">{translations.email}</p>
            <Input type="text" placeholder="luka.absa@invitare.co" name="email" className="mb-4"/>
            <p className="text-sm font-semibold mb-1.5">{translations.password}</p>
            <Input type="password" placeholder="********" name="password"/>
            <Link href="/auth/password-recovery" className="text-sm mt-1.5 underline">{translations.passwordAsk}</Link>
            { error && <ErrorAlert className="mt-4" error={error}/>}
            <Button className={error ? 'mt-4' : 'mt-6'} disabled={pending}>{translations.submit}</Button>
        </form>
    )
}
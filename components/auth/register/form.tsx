'use client'

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Input } from "@/components/ui/input"
import { auth } from "@/lib/actions"
import { Button } from "../../ui/button"
import ErrorAlert from "../../ui/error-alert"


interface Translations {
    email: string
    name: string
    password: string
    submit: string
    title: string
}

export default function RegisterForm({ translations } : { translations: Translations }){
    const { pending } = useFormStatus()
    const [error, setError] = useState<string|undefined>()

    function submit(formData: FormData){
        setError(undefined)
        auth('register', formData).then(res => {
            if(res && res.statusCode >= 400) setError(res.message)
        })
    }

    return (
        <form action={submit} className="flex flex-col w-full">
            <h1 className="text-2xl font-semibold mb-6">{translations.title}</h1>
            <p className="text-sm font-semibold mb-1.5">{translations.name}</p>
            <Input type="text" name="name" placeholder="Luka Absa" className="mb-4"/>
            <p className="text-sm font-semibold mb-1.5">{translations.email}</p>
            <Input type="text" name="email" placeholder="luka.absa@invitare.co" className="mb-4"/>
            <p className="text-sm font-semibold mb-1.5">{translations.password}</p>
            <Input type="password" autoComplete="new-password" placeholder="********" name="password"/>
            { error && <ErrorAlert error={error}/>}
            <Button className="mt-6" disabled={pending}>{translations.submit}</Button>
        </form>
    )
}
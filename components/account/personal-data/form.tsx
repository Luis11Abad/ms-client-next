'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"
import { updateUser } from "@/lib/actions"
import ErrorAlert from "@/components/ui/error-alert"

interface Translations {
    name: string
    email: string
    phone: string
    submit: string
}

export default function PersonalDataForm({ user, translations }: { user: any, translations: Translations}) {
    const { pending } = useFormStatus()
    const [savedData, setSavedData] = useState({...user})
    const [data, setData] = useState({...user})
    const [error, setError] = useState<string|undefined>()

    const edited = JSON.stringify(savedData) != JSON.stringify(data)

    useEffect(() => {
        if(error != null) setTimeout(() => setError(undefined), 5000)
    }, [error])

    function submit(formData: FormData){
        setError(undefined)
        if(data.phone == null) formData.delete('phone')
        updateUser(formData).then(res => {
            if(res && res.statusCode >= 400) setError(res.message)
            else setSavedData(res.data)
        })
    }

    return <form action={submit} className="bg-white border w-full p-6 rounded-xl">
        <p className="text-sm font-semibold mb-1.5">{translations.name}</p>
        <Input onChange={(e) => setData({ ...data, name: e.target.value })} type="text" name="name" placeholder="Luka Absa" defaultValue={data.name} className="mb-4 max-w-sm"/>
        <p className="text-sm font-semibold mb-1.5">{translations.email}</p>
        <Input type="text" name="email" placeholder="luka.saba@invitare.co" value={user.email} disabled className="mb-4 !opacity-100 max-w-sm bg-stone-50 cursor-not-allowed"/>
        <p className="text-sm font-semibold mb-1.5">{translations.phone}</p>
        <Input onChange={(e) => setData({ ...data, phone: e.target.value == '' ? null : e.target.value })} type="tel" placeholder="777 77 77 77" name="phone" defaultValue={data.phone} className="mb-5 max-w-sm"/>
        { error && <ErrorAlert className="my-4" error={error}/>}
        <Button disabled={!edited || pending}>{translations.submit}</Button>
    </form>
}
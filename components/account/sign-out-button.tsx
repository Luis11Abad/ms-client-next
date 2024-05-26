'use client'

import { handleSession } from "@/lib/actions"
import { Button } from "../ui/button"

export default function SignOutButton({ label } : { label: string}){
    return (
        <Button onClick={async() => { handleSession(null) }} className="w-36" type="submit">{label}</Button>
    )
}
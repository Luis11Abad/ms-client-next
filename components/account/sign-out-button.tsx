"use client"

import { handleSession } from "@/lib/actions"

import Logout from '@/components/ui/icons/logout.svg'

export default function SignOutButton({ label }: { label: string}){
    async function logout() {
        handleSession(null)
    }
    return (
        <button onClick={async() => logout()} className="flex justify-start items-center h-11 px-4 gap-x-3 text-sm bg-stone-50" type="submit"><Logout/> {label}</button>
    )
}
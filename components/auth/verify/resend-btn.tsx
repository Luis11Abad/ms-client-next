'use client'

import { Button } from "../../ui/button"

export default function ResendVerificationBtn({ label }: { label: string }){
    return (
        <Button className="p-0 underline underline-offset-1 h-4" variant='link'>{label}</Button>
    )
}
'use client'

import { Button } from "../../ui/button"
import Google from "@/components/ui/icons/google.svg"

export default function GoogleBtn() {
    function redirectToProvider() {
        return window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
    }
    
    return (
        <Button onClick={redirectToProvider} variant="outline" className="flex-1">
            <Google/>
        </Button>
    )
}
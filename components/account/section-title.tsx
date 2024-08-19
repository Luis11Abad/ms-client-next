'use client'

import { usePathname } from "@/navigation"

export default function SectionTitle() {
    const path = usePathname()

    return (
        <h1 className="pt-6 pb-3 font-semibold text-transparent">_</h1>
    )
}
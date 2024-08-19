"use client"

import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"

import Link from "next/link"

export default function LangPickerBtn({ label, locale }: { label: string, locale: string }) {
    const path = usePathname()
    const currentLocale = useLocale()

    return (
        <Link href={path.replace(currentLocale, locale)} className={`flex px-4 gap-x-4 items-center justify-center h-12 text-sm flex-1 rounded-lg hover:bg-stone-50 hover:text-stone-600 ${locale == currentLocale && 'bg-stone-50 text-stone-600 pointer-events-none'}`}>
            {label}
        </Link>
    )
}
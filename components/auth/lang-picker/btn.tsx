"use client"

import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"

import Check from "@/components/ui/icons/check.svg"
import Link from "next/link"

export default function LangPickerBtn({ label, locale }: { label: string, locale: string }) {
    const path = usePathname()
    const currentLocale = useLocale()

    return (
        <Link href={path.replace(currentLocale, locale)} className='flex flex-none items-center justify-start px-6 w-48 h-9 text-sm rounded-lg hover:underline'>
            {label}
            {currentLocale === locale && <Check className='text-xl ml-2'/>}
        </Link>
    )
}
"use client"

import { Link } from "@/navigation"
import { usePathname } from "next/navigation"

export default function SideMenuButton({ icon, path, text }: { icon: React.ReactElement, path: string, text: string}) {
    const currentPath = usePathname()
    const isActive = path == currentPath.substring(3)

    return <Link className={`flex items-center h-12 px-4 text-sm border-b border-slate-100 gap-x-3 ${isActive && 'bg-slate-50'}`} 
        key={path} 
        href={path}>
        {icon} {text}
    </Link>
}
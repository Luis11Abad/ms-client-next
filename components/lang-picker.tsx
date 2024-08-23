import { useLocale, useTranslations } from "next-intl"
import { locales } from "@/navigation"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import Caret from "@/components/ui/icons/caret.svg"
import Lang from "@/components/ui/icons/lang.svg"
import LangPickerBtn from "./auth/lang-picker/btn"

export default function LangPicker(){
    const locale = useLocale()
    const t = useTranslations("Langs")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='link' className="h-8 pr-3 pl-2.5 !no-underline flex items-center text-sm gap-x-1.5 [&>svg:last-child]:data-[state=open]:rotate-180">
                    <Lang/> {locale.toUpperCase()} <Caret className=""/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <div className="w-full flex flex-col py-4">
                    {locales.map(item => (<LangPickerBtn key={item} label={t(item)} locale={item}/>))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
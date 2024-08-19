import { useLocale, useTranslations } from "next-intl"
import { locales } from '@/navigation'

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import Lang from '@/components/ui/icons/lang.svg'
import LangPickerBtn from "./auth/lang-picker/btn"

export default function LangPicker(){
    const locale = useLocale()
    const t = useTranslations("Langs")

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='link' className="h-8 pr-3 pl-2.5 !no-underline flex items-center text-[13px] gap-x-1 bg-stone-100"><Lang/> {locale.toUpperCase()}</Button>
            </DialogTrigger>
            <DialogContent className="flex justify-center w-screen max-w-none h-screen !rounded-none">
                <div className="flex flex-col items-center w-full max-w-7xl">
                    <div className="flex items-center gap-x-3 pt-3 pb-12 text-xl">
                        <Lang className="scale-125"/>
                        <h2 className="font-semibold">{t("select")}</h2>
                    </div>
                    <div className="w-full flex gap-x-4">
                        {locales.map(item => (<LangPickerBtn key={item} label={t(item)} locale={item}/>))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
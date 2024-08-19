import SideMenu from "@/components/account/side-menu"
import SectionTitle from "@/components/account/section-title"

export default async function AccountLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="flex mx-auto w-full max-w-7xl gap-x-6">
                <SideMenu/>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <SectionTitle/>
                    {children}
                </div>
            </div>
        </>
    )
}
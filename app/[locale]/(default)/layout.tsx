import Footer from "@/components/footer"
import Header from "@/components/header"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            <main className="flex flex-col flex-1 bg-stone-100">
                {children}
            </main>
            <Footer/>
        </>
    )
}
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col md:flex-row items-center justify-center flex-1 w-full">
            <div className="flex flex-1 w-full md:w-1/2 md:h-screen bg-stone-100 p-8">
                <div className="bg-white/50 h-full w-full rounded-3xl"></div>
            </div>
            <div className="flex md:items-center flex-1 w-full md:w-1/2 md:h-screen bg-white">{children}</div>
        </main>
    )
}
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col md:flex-row items-center justify-center flex-1 w-full bg-slate-100">
            <div className="flex flex-1 w-full md:h-screen">fadsfadsfdsa</div>
            <div className="flex md:items-center flex-1 w-full bg-white md:h-screen">{children}</div>
        </main>
    )
}
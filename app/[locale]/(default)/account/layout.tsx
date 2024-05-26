import { getUser } from "@/lib/dal"

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
    const user = await getUser()

    return (
        <>
            <main className="flex flex-col flex-1">
                {JSON.stringify(user)}
                {children}
            </main>
        </>
    )
}
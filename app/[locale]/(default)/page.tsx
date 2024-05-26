import { redirect } from "@/navigation"

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    if(searchParams.oat) redirect(`/account`)
    if(searchParams.oae) redirect(`/auth/login?err=${searchParams.oae}`)

    return (
        <>
            <h1>Home</h1>
        </>
    )
}

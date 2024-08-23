import HomeFeatures from "@/components/home/features"
import Card from "@/components/ui/card"
import { redirect } from "@/navigation"

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    if(searchParams.oat) redirect(`/account`)
    if(searchParams.oae) redirect(`/auth/login?err=${searchParams.oae}`)

    return (
        <div className="bg-cyan-900">
            <Card/>
            <HomeFeatures/>
        </div>
    )
}

import { getFeatures } from "@/lib/services/content"

export default async function HomeFeatures() {
    const data = await getFeatures()
    console.log(data)
    return <section id="e-invites-features" className="flex justify-center bg-white py-12">
        <div className="w-full max-w-7xl">
            <h1 className="text-3xl font-semibold text-center">¿Por qué utilizar Invitaciones Digitales?</h1>
            {data}
        </div>
    </section>
}
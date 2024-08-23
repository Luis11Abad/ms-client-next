import { ContentList } from "@/lib/definitions"
import { getFeatures } from "@/lib/services/content"
import Image from "next/image"

export default async function HomeFeatures() {
    const data: ContentList = await getFeatures()
    return <section id="e-invites-features" className="flex justify-center bg-white py-12">
        {data && <div className="w-full max-w-7xl">
            <h1 className="text-2xl font-semibold text-center">¿Por qué utilizar Invitare?</h1>
            <div className="flex py-12">
                {data.map(item => 
                    <div key={item.slug} className="flex flex-col">
                        {item.image && <Image src={item.image} alt={item.title}/>}
                        <h4>{item.title}</h4>
                        <h4>{item.description}</h4>
                    </div>
                )}
            </div>
        </div>
        }
    </section>
}
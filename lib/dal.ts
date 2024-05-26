import { cache } from "react"
import { get } from "@/lib/utils/fetch"

export const getUser = cache(async () => {
    try {
        const { data, statusCode } = await get('/auth/session', {})
        
        return (statusCode >= 400) ? null : data
    } catch (error) {
        return null
    }
})
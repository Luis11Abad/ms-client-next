import { cache } from "react"
import { Methods, doFetch } from "@/lib/utils/fetch"

export const getUser = cache(async () => {
    try {
        const { data, statusCode } = await doFetch('/auth/session', Methods.GET)
        
        return statusCode >= 400 ? null : data
    } catch (error) {
        return null
    }
})
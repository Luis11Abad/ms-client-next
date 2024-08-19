import { ContentType } from "../definitions"
import { doFetch, Methods } from "../utils/fetch"

export const getFeatures = async () => {
    try {
        const { data, statusCode } = await doFetch('/contents', Methods.GET, { type: ContentType.Feature })
        
        return statusCode >= 400 ? null : data
    } catch (error) {
        return null
    }
}
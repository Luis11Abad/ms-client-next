import { cookies } from "next/headers"
import { ApiResponse } from "../definitions"
import { defaultLocale } from "@/navigation"

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export async function doFetch(path: string, method: Methods, params?: any, formData?: FormData){
    const headers = getHeaders()

    let queryString = method == Methods.GET ? new URLSearchParams(params).toString() : ''
    queryString = queryString != '' ? `?${queryString}` : ''

    let options: any = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': headers.token,
            'Accept-Language': headers.lang
        },
        body: method == Methods.GET ? null : JSON.stringify(Object.fromEntries(formData ?? new FormData()))
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}${queryString}`, options)

    const parsedRes = await res.json()

    return formatResponse(parsedRes)
}

function getHeaders() {
    const token = cookies().get('session')?.value
    const lang = cookies().get('NEXT_LOCALE')?.value
    return {
        token: token ? `Bearer ${token}` : '',
        lang: lang ?? defaultLocale
    }
}

function formatResponse(result: any): ApiResponse {
    if(result.errors && result.errors.length > 0) {
        return {
            statusCode: 400,
            data: null,
            message: result.errors[0]
        }
    }
    return result
}
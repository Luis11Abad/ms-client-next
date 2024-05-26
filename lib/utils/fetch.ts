import { cookies } from "next/headers"
import { ApiResponse } from "../definitions"

export async function get(path: string, params: any){
    const token = cookies().get('session')?.value
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}?${new URLSearchParams(params).toString()}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        },
    })

    const parsedRes = await res.json()

    return formatResponse(parsedRes)
}

export async function post(path: string, formData: FormData){
    const token = cookies().get('session')?.value
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })

    const parsedRes = await res.json()

    return formatResponse(parsedRes)
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
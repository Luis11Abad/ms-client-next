'use server'

import { redirect } from "@/navigation"
import { Methods, doFetch } from "./utils/fetch"
import { createSession, deleteSession } from "./session"
import { isRedirectError } from 'next/dist/client/components/redirect'

const defaultErrorMessage = '500 Internal Server Error'

export async function auth(endpoint: string, formData: FormData) {
    try {
        const { data, message, statusCode } = await doFetch(`/auth/${endpoint}`, Methods.POST, {}, formData)

        if (!data || !data.token) return { data, message, statusCode }

        await createSession(data.token)

        redirect('/account')
        
    } catch(err) {
        if(isRedirectError(err)) throw err
        return { 
            statusCode: 500,
            message: defaultErrorMessage
        }
        
    }
}

export async function handleSession(token: string | null) {
    try {
        if(token == null) {
            await deleteSession()
            redirect('/auth/login')
        } else {
            await createSession(token)
            redirect('/account')
        }
    } catch(err) {
        if(isRedirectError(err)) throw err
        return { 
            statusCode: 500,
            message: defaultErrorMessage
        }
    }
}

export async function updateUser(formData: FormData) {
    try {
        
        const { data, message, statusCode } = await doFetch('/auth', Methods.PATCH, {}, formData)

        return { data, message, statusCode }  
    } catch(err) {
        if(isRedirectError(err)) throw err
        return { 
            statusCode: 500,
            message: defaultErrorMessage
        }
        
    }
}
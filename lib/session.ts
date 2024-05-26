import 'server-only'

import { cookies } from 'next/headers'

 
export async function createSession(token: string) {
    try {
        cookies().set('session', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            path: '/',
        })
    } catch (err) {
        console.error('ERROR_CREATING_SESSION', err)
    }
}

export async function deleteSession() {
    try {
        cookies().delete('session')
    } catch (err) {
        console.error('ERROR_DELETING_SESSION', err)
    }
}
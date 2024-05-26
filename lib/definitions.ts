import { JwtPayload } from "jwt-decode"

export interface ApiResponse {
    data: any
    message: string
    statusCode: number
}

export interface AuthResponse {
    isVerified: boolean
    token: string
}
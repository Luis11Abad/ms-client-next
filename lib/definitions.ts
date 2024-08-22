export interface ApiResponse {
    data: any
    message: string
    statusCode: number
}

export interface AuthResponse {
    isVerified: boolean
    token: string
}

export enum ContentType {
    About = "about",
    Blog = "blog",
    FAQ = "faq",
    Feature = "feature",
    Policy = "policy",
    Social = "social",
}

export interface ContentListItem {
    description?: string
    image?: string
    slug: string
    title: string
}

export type ContentList = ContentListItem[]

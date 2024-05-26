import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function LocaleLayout({ children, params: {locale}}: Readonly<{
  children: React.ReactNode
  params: any
}>) {
    return (
        <html lang={locale}>
            <body className={`${inter.className} flex min-h-screen flex-col`}>
                {children}
            </body>
        </html>
    )
}

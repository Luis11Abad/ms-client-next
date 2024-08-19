import { Link } from "@/navigation"
import AccountBtn from "./auth/header/account-btn"

export default function Header(){
    return (
        <header className="flex justify-center items-center py-5 border-b">
            <div className="w-full max-w-7xl flex items-center justify-between">
                <Link href='/'><h1 className="text-xl font-bold">InvitareCo</h1></Link>
                <div className="flex gap-x-4">
                    <AccountBtn/>
                </div>
            </div>
        </header>
    )
}
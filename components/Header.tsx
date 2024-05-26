import TopBar from "./auth/header/top-bar"

export default function Header(){
    return (
        <header className="flex flex-col border-b">
            <TopBar/>
            <div className="h-16 flex justify-center items-center">
                <div className="w-full max-w-7xl">
                    <h1 className="text-2xl font-black">invitare</h1>
                </div>
            </div>
        </header>
    )
}
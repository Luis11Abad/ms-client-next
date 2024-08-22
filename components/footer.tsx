import LangPicker from "./lang-picker"

export default function Footer(){
    return (
        <footer className="flex justify-center">
            <div className="w-full max-w-7xl">
                <h1>Footer</h1>
                <div className="w-full flex justify-between py-6 border-t">
                    <p>Copyright {new Date().getFullYear()}, All Rights Reserved by {process.env.NEXT_PUBLIC_APP_NAME}</p>
                    <LangPicker/>
                </div>
            </div>
        </footer>
    )
}
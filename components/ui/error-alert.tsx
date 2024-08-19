import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Error from "@/components/ui/icons/error.svg"

export default function ErrorAlert({ className, error }: { className?: string, error: string}) {
    return (
        <Alert className={className} variant="destructive">
            <Error/>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
    )
}
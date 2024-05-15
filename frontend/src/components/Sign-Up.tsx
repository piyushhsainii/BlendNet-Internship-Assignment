import { SignUp } from "@clerk/clerk-react"

export default function SignUpPage() {
    return <>
        <div className="flex justify-center items-center h-screen w-screen">
            <SignUp path="/sign-in" />
        </div>
    </>;
}
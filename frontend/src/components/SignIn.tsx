import { SignIn } from "@clerk/clerk-react"

export default function SignInPage() {
    return <>
        <div className="flex justify-center items-center h-screen w-screen">
            <SignIn path="/sign-in" />
        </div>
    </>;
}
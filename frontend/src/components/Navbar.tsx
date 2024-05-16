import { Link } from "react-router-dom"
import { SignedIn, UserButton } from "@clerk/clerk-react"

export function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <nav className="flex items-center gap-4">
        <Link className="mr-6 flex items-center gap-2 text-lg font-semibold" to="/">
          <MountainIcon className="h-6 w-6" />
          <span>blendnet</span>
        </Link>
      </nav>
      <nav className="ml-auto flex items-center gap-4">
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          to="/stock"
        >
          My Watchlist
        </Link>
        <SignedIn>
          <UserButton afterSignOutUrl='/sign-in' />
        </SignedIn>
      </nav>
    </header>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}



import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import './App.css'
import Home from './components/Home'
import StockInfo from './components/StockInfo'
import WatchList from './components/WatchList'
import { Toaster } from './components/ui/toaster'
function App() {

  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <Home />
          <StockInfo />
          <WatchList />
        </SignedIn>
        <Toaster />
      </header>
    </>
  )
}

export default App

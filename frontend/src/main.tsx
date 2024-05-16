import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout.tsx'
import Home from './components/Home.tsx'
import SignInPage from './components/SignIn.tsx'
import SignUpPage from './components/Sign-Up.tsx'
import DashboardLayout from './components/Dashboard.tsx'
import DashboardPage from './components/Dashboard.tsx'
import WatchList from './components/WatchList.tsx'
import StockInfo from './components/StockInfo.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: '/',
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "/sign-in/*", element: <SignInPage />
      },
      {
        path: "/sign-up/*", element: <SignUpPage />
      },
      {
        path: "dashboard", element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
        ]
      },
      {
        path: '/stock', element: <WatchList />
      },
      {
        path: '/stock/:id', element: <StockInfo />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

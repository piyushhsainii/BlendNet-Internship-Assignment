import { useAuth } from "@clerk/clerk-react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Navbar } from "./Navbar"
import { useEffect } from "react"
import { Loader } from "./loader"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { useToast } from "./ui/use-toast"

export default function Home() {

    interface Stock {
        name: String,
        symbol: String
    }
    const { toast } = useToast()
    const stockArray = [
        { name: "Apple Inc.", symbol: "AAPL" },
        { name: "Microsoft Corp", symbol: "MSFT" },
        { name: "Tesla, Inc.", symbol: "TSLA" },
        { name: "Nvida Corporation", symbol: "NVDA" },
        { name: "Alphabet Inc.", symbol: "GOOGL" },
        { name: "International Business Machines Cor..", symbol: "IBM" },
    ]
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()

    const addToWatchList = (name: String, symbol: String) => {

        if (localStorage.getItem("name")) {
            let existingWatchList = JSON.parse(localStorage.getItem("name") || "")
            localStorage.setItem("name", JSON.stringify([{ name: name, symbol: symbol }, ...existingWatchList]))
        } else {
            localStorage.setItem("name", JSON.stringify([{ name: name, symbol: symbol }]))
        }
        toast({
            description: "Added to Watchlist"
        })
    }

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in")
        }
    }, [isLoaded])
    if (!isLoaded) return <Loader />

    return (
        <>
            <Navbar />
            <main className="w-full">
                <section className="bg-gray-100 py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore the Stock Market</h1>
                            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Stay up-to-date with the latest stock prices and trends. Add your favorite stocks to your watchlist.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {
                                stockArray.map((stock: Stock) => (
                                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                                        <div className="flex h-[80px] items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold"> {stock.name} </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{stock.symbol}</p>
                                            </div>
                                            <Button className="h-8 w-8" size="icon" variant="outline">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <div onClick={() => addToWatchList(stock.name, stock.symbol)}><PlusIcon className="h-4 w-4" /> </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Add to Watchlist</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

function PlusIcon(props: any) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}
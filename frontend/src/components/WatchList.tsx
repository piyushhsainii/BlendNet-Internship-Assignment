import { MoveUpRight } from "lucide-react"
import { Button } from "./ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"

export default function WatchList() {

    interface Stock {
        name: String,
        symbol: String
    }

    const stockArray = [
        { name: "Apple Inc.", symbol: "AAPL" },
        { name: "Microsoft Corp", symbol: "MSFT" },
        { name: "Tesla, Inc.", symbol: "TSLA" },
        { name: "Nvida Corporation", symbol: "NVDA" },
        { name: "Alphabet Inc.", symbol: "GOOGL" },
        { name: "International Business Machines Cor..", symbol: "IBM" },
    ]

    return (
        <>
            <Navbar />
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Real-Time Stock Data
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Stay up-to-date and Manage your Stocks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
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
                                                <Link to={`/stock/${stock.name}`} >  <MoveUpRight className="h-4 w-4" /> </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Watch Stock Price</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
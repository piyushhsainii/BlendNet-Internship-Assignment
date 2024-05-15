import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar } from "./Navbar"

const StockInfo = () => {

    interface MetaData {
        "1. Information": String,
        "2. Symbol": String,
        "3. Last Refreshed": String,
        "4. Interval": String,
        "5. Output Size": String,
        "6. Time Zone": String,
    }
    const [MetaData, setMetaData] = useState<MetaData>()
    const [StockData, setStockData] = useState<any>()
    const { id } = useParams()

    const fetchStockData = async () => {
        const { data } = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
        setStockData(data['Time Series (5min)'])
        setMetaData(data['Meta Data'])
    }

    useEffect(() => {
        fetchStockData()

    }, [])

    function mapKeys(obj: any) {
        const mappedObject: any = {};
        Object.keys(obj).forEach((key) => {
            mappedObject[`${key}`] = obj[key];
        });
        return mappedObject;
    }
    StockData && mapKeys(StockData);

    return (
        <>
            <Navbar />
            {
                MetaData &&
                <section className="w-full py-12 md:py-20 lg:py-28">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    {id}
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    {MetaData && MetaData["2. Symbol"]}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            }
            <div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    {MetaData && MetaData['1. Information']}
                </p>

            </div>
            {
                StockData &&
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className=" px-4 md:px-6">
                        <div className="overflow-x-auto rounded-lg border shadow-sm">
                            {
                                StockData &&
                                Object.keys(StockData).map((key) => (
                                    <Table>
                                        <TableHeader>
                                            <TableRow >
                                                <TableHead className="font-semibold text-black">Timestamp</TableHead>
                                                <TableHead className="font-semibold text-black">Open</TableHead>
                                                <TableHead className="font-semibold text-black">High</TableHead>
                                                <TableHead className="font-semibold text-black">Low</TableHead>
                                                <TableHead className="font-semibold text-black">Close</TableHead>
                                                <TableHead className="font-semibold text-black">Volume</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="text-left mx-3 font-semibold " >{key} </TableCell>
                                                <TableCell className="text-left mx-3 " >100.00</TableCell>
                                                <TableCell className="text-left mx-3 " >102.50</TableCell>
                                                <TableCell className="text-left mx-3 " >99.75</TableCell>
                                                <TableCell className="text-left mx-3 " >101.25</TableCell>
                                                <TableCell className="text-left mx-3 " >1,000,000</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                ))
                            }

                        </div>
                    </div>
                </section>
            }

        </>

    )
}

export default StockInfo
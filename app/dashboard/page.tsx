import { lusitana } from "@/app/ui/fonts";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { revenue } from "../lib/placeholder-data";
import { fetchLatestInvoices } from "../lib/data";
import LatestInvoices from "../ui/dashboard/latest-invoices";

export default async function Page(){
    const latestInvoices = await fetchLatestInvoices();
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grind gap-6 sm:grind-cols-2 lg:grind-cols-4">
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-8">
                 <RevenueChart revenue={revenue}/> 
                    <LatestInvoices latestInvoices={latestInvoices} />  
                    </div>
        </main>
    )
}
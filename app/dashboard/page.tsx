import { lusitana } from "@/app/ui/fonts";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { revenue } from "../lib/placeholder-data";

export default async function Page(){
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grind gap-6 sm:grind-cols-2 lg:grind-cols-4">
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-8">
                 <RevenueChart revenue={revenue}/>   
                    </div>
        </main>
    )
}
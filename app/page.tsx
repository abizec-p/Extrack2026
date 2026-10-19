import IncomeExpenseChart from "@/components/chart";
import Header from "@/components/header";
import Overview from "@/components/overview";
import Recent from "@/components/recent";
import { transactions } from "./data/transaction";
import CategoryBars from "@/components/ranking";

export default function Page() {
  return (
    <>
      <div className="h-full flex gap-10 justify-between   mx-20">
        <div className="flex-1">
          <Header />
          <Overview />
          <Recent />
        </div>
        <div className="w-120 flex flex-col gap-10  ">
          <div className="bg-white shadow-sm rounded-lg  mt-8 p-5">
            <IncomeExpenseChart />
          </div>
          <div>
            {" "}
            <CategoryBars />
          </div>
        </div>
      </div>
    </>
  );
}

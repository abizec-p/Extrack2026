import IncomeExpenseChart from "@/components/chart";
import Header from "@/components/header";
import Overview from "@/components/overview";
import Recent from "@/components/recent";
import { transactions } from "./data/transaction";
import CategoryBars from "@/components/ranking";

export default function Page() {
  return (
    <>
      <div className="h-full flex flex-col md:flex-row gap-10 justify-between mx-5  md:mx-20">
        <div className="flex-1">
          <Header />
          <Overview />
          <Recent />
        </div>
        <div className="w-full md:w-120 flex flex-col gap-10  ">
          <div className="bg-white shadow-sm rounded-lg  mt-8 p-2 md:p-5">
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

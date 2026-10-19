import { transactions } from "@/app/data/transaction";
export default function Recent() {
    const totalIncome = transactions.reduce((sum,tr)=> sum + tr.income,0)
    const totalExpense = transactions.reduce((sum,tr)=> sum + tr.expense,0)
  return (
    <div className="border-neutral-300 rounded-lg mt-5  py-2  bg-white">
      <div className="flex justify-between px-8 py-3 pt-5 border-b border-neutral-300 ">
        <h1 className=" font-bold text-lg">Recent Transaction</h1>
        <div className="flex   justify-between">
          <h1 className="w-25  text-center font-bold">
            
            Income</h1>
          <h1 className="w-25  text-center font-bold">Expense</h1>
        </div>
      </div>
      <div className="border-b border-neutral-300">
        {transactions.map((tr, index) => (
          <div
            key={index}
            className="flex justify-between mx-8 py-3 border-b border-neutral-200"
          >
            <div className="block">
            <h1 className="font-semibold">{tr.title}</h1>
            <p className="text-neutral-400 text-xs">{tr.category} | {tr.date}</p>
            </div>
            <div className="flex text-center">
              <p className="w-25 text-green-600">{tr.income?"$":""}{tr.income}</p>
              <p className="w-25 text-red-600">{tr.expense?"$":""}{tr.expense}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between py-5 mx-8">
        <h1 className="font-bold">Total</h1>
        <div className="flex text-center">
        <h1 className="w-25 font-bold text-green-600">${totalIncome.toFixed(2)}</h1>
        <h1 className="w-25 font-bold text-red-600">${totalExpense.toFixed(2)}</h1></div>
      </div>
    </div>
  );
}

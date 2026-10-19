export default function Overview() {
  return (
    <div className=" mt-10 *:px-5 *:py-2 *:rounded-lg *:shadow-sm *:w-50  flex justify-between *:bg-white ">
      <div className="">
        <h1 className="text-sm text-neutral-400">Balance</h1>
        <h1 className="font-semibold text-2xl">$1450</h1>
      </div>
      <div>
        <h1 className="text-sm text-neutral-400">Income</h1>
        <h1 className="font-semibold text-green-600 text-2xl">$2000</h1>
      </div>
      <div>
        <h1 className="text-sm text-neutral-400">Expenses</h1>
        <h1 className="font-semibold text-2xl text-red-600">$550</h1>
      </div>
    </div>
  );
}

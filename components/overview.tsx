export default function Overview() {
  return (
    <div className="mt-3 gap-2 md:mt-10  md:px-5 py-1 md:py-2 *:rounded-lg *:shadow-sm *:w-50  flex justify-center md:justify-between *:bg-white ">
      <div className="px-3 md:px-5 py-1 md:py-2">
        <h1 className="text-[10px] md:text-sm text-neutral-400">Balance</h1>
        <h1 className="font-semibold text-base md:text-2xl">$1450</h1>
      </div>
      <div className="px-3 md:px-5 py-1 md:py-2">
        <h1 className="text-[10px] md:text-sm text-neutral-400">Income</h1>
        <h1 className="font-semibold text-green-600 text-base md:text-2xl">$2000</h1>
      </div>
      <div className="px-3 md:px-5 py-1 md:py-2">
        <h1 className="text-[10px] md:text-sm text-neutral-400">Expenses</h1>
        <h1 className="font-semibold text-base md:text-2xl text-red-600">$550</h1>
      </div>
    </div>
  );
}

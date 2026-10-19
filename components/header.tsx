export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="mt-5 ">
          <h1 className="font-bold text-xl">Hello Abishek,</h1>
          <p>Spent on something good?</p>
        </div>
        <div className="flex mt-8  gap-2">
          <button className="border border-neutral-100 text-sm font-bold px-4 py-2  rounded  bg-white text-green-700">
            + Add Income
          </button>
          <button className="border border-neutral-100 text-sm font-bold px-4 py-2 rounded bg-white text-red-500">
            + Add expense
          </button>
        </div>
      </div>
    </div>
  );
}

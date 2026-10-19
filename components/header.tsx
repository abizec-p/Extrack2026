export default function Header() {
  return (
    <div className="">
      <div className="block md:flex  justify-between">
        <div className=" mt-12 md:mt-5 text-center md:text-left ">
          <h1 className="font-bold  text-xl">Hello Abishek,</h1>
          <p >Spent on something good?</p>
        </div>
        <div className="flex mt-3 md:mt-8 justify-center gap-2">
          <button className="border border-neutral-100 text-xs md:text-sm font-bold px-2 md:px-4 py-2  rounded  bg-white text-green-700">
            + Add Income
          </button>
          <button className="border border-neutral-100 text-xs md:text-sm font-bold px-2 md:px-4 py-2 rounded bg-white text-red-500">
            + Add expense
          </button>
        </div>
      </div>
    </div>
  );
}

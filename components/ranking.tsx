const categories = [
  { name: "Rent", amount: "$950.00", width: "w-full" },
  { name: "Food", amount: "$126.20", width: "w-[13%]" },
  { name: "Transport", amount: "$35.00", width: "w-[4%]" },
  { name: "Miscellaneous", amount: "$25.00", width: "w-[3%]" },
];

export default function CategoryBars() {
  return (
    <div className="rounded-lg shadow-sm bg-white p-6">
      <h2 className="mb-5 text-lg font-bold">Spending by category</h2>

      {categories.map((c) => (
        <div key={c.name} className="mb-4">
          <div className="mb-1.5 flex justify-between text-sm">
            <span>{c.name}</span>
            <span className="text-neutral-500">{c.amount}</span>
          </div>

          <div className="h-2 rounded-full bg-neutral-100">
            <div className={`h-2 rounded-full bg-orange-500 ${c.width}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
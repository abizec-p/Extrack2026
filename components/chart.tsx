'use client'
import { CartesianGrid, Legend,Line, LineChart,XAxis,YAxis } from "recharts";
import  {transactions} from "../app/data/transaction";

export default function IncomeExpenseChart(){
    return(
          <LineChart
      style={{ width: "100%", aspectRatio: 1.618, maxWidth: 800, margin: "auto" }}
      responsive
      data={transactions}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="category" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="income" stroke="#16a34a" />
      <Line type="monotone" dataKey="expense" stroke="#e2663b" />
      <Legend />
    </LineChart>
    )
}
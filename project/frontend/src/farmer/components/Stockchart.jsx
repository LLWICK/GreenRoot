import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Crops } from "../../assets/tempData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function StockChart() {
  return (
    <div>
      <ResponsiveContainer width={300} height={250}>
        <PieChart>
          <Tooltip />
          <Legend />

          <Pie
            data={Crops}
            cx="50%"
            cy="50%"
            innerRadius={50} // Added innerRadius for ring chart effect
            outerRadius={80}
            fill="#8884d8"
            dataKey="amount"
          >
            {Crops.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockChart;

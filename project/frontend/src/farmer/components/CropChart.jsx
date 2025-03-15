import React from "react";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

import { Crops } from "../../assets/tempData";

function CropChart() {
  return (
    <div>
      <div>
        <BarChart width={500} height={400} data={Crops}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="green" />
        </BarChart>
      </div>
    </div>
  );
}

export default CropChart;

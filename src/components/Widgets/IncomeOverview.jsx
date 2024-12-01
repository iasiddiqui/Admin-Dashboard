import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Mon", income: 1000 },
  { name: "Tue", income: 1500 },
  { name: "Wed", income: 900 },
  { name: "Thu", income: 1200 },
  { name: "Fri", income: 200 },
];

const IncomeOverview = () => (
  <div>
    <h3>Income Overview</h3>
    <BarChart width={400} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="income" fill="#8884d8" />
    </BarChart>
  </div>
);

export default IncomeOverview;

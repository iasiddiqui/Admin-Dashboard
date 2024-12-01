import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./BarChartComponent.css"; 

const data = [
  { name: "Jan", income: 500, cost: 300 },
  { name: "Feb", income: 700, cost: 400 },
  { name: "Mar", income: 900, cost: 500 },
];

const BarChartComponent = () => (
  <div className="bar-chart-container">
    <h3 className="chart-title">Sales Report</h3>
    <ResponsiveContainer width="95%" height={300}>
      <BarChart data={data}>
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "#ccc" }}
        />
        <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#ccc" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          itemStyle={{ color: "#333" }}
          labelStyle={{ fontWeight: "bold", color: "#555" }}
        />
        <Bar dataKey="income" fill="#8884d8" radius={[10, 10, 0, 0]} />
        <Bar dataKey="cost" fill="#82ca9d" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartComponent;

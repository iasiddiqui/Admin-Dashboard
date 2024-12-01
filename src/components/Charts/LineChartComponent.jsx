import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./LineChartComponent.css"; 

const data = [
  { name: "Mon", pageViews: 10, sessions: 15 },
  { name: "Tue", pageViews: 20, sessions: 25 },
  { name: "Wed", pageViews: 30, sessions: 35 },
  { name: "Thu", pageViews: 50, sessions: 40 },
  { name: "Fri", pageViews: 70, sessions: 55 },
];

const LineChartComponent = () => (
  <div className="line-chart-container">
    <h3 className="chart-title">Unique Visitor Statistics</h3>
    <ResponsiveContainer width="95%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
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
        <Line
          type="monotone"
          dataKey="pageViews"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ stroke: "#8884d8", strokeWidth: 2, r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="sessions"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={{ stroke: "#82ca9d", strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LineChartComponent;

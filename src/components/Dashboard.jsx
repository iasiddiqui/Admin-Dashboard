import React from "react";
import { Grid, Box } from "@mui/material";
import LineChartComponent from "./Charts/LineChartComponent";
import BarChartComponent from "./Charts/BarChartComponent";
import OrdersTable from "./Tables/OrdersTable";
import IncomeOverview from "./Widgets/IncomeOverview";
import TransactionHistory from "./Widgets/TransactionHistory";
import "../styles/Dashboard.css";
import AnalyticsChart from "./Charts/AnalyticsChart";

const Dashboard = () => (
  <Box p={3}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <LineChartComponent />
      </Grid>
      <Grid item xs={12} md={4}>
        <IncomeOverview />
      </Grid>
      <Grid item xs={12}>
        <OrdersTable />
      </Grid>
      <Grid item xs={12}>
        <AnalyticsChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <BarChartComponent />
      </Grid>
      <Grid item xs={12} md={6}>
        <TransactionHistory />
      </Grid>
    </Grid>
  </Box>
);

export default Dashboard;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Typography,
  Chip,
} from "@mui/material";
import "./OrdersTable.css"; 

const orders = [
  { tracking: "13254698", product: "Keyboard", total: "$70,099", status: "Rejected" },
  { tracking: "13286664", product: "Computer Accessories", total: "$83,348", status: "Approved" },
  { tracking: "84546564", product: "Camera Lens", total: "$40,570", status: "Rejected" },
  { tracking: "98632236", product: "TV", total: "$410,780", status: "Pending" },
  { tracking: "98753275", product: "Desktop", total: "$98,023", status: "Approved" },
];

const getStatusChipColor = (status) => {
  switch (status) {
    case "Approved":
      return "success";
    case "Rejected":
      return "error";
    case "Pending":
      return "warning";
    default:
      return "default";
  }
};

const OrdersTable = () => (
  <TableContainer component={Paper} className="table-container">
    <Typography variant="h6" className="table-title">
      Recent Orders
    </Typography>
    <Table>
      <TableHead>
        <TableRow className="table-header">
          <TableCell>Tracking No.</TableCell>
          <TableCell>Product Name</TableCell>
          <TableCell>Total Amount</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.tracking} className="table-row">
            <TableCell>{order.tracking}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>
              <Chip
                label={order.status}
                color={getStatusChipColor(order.status)}
                size="small"
                className="status-chip"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default OrdersTable;

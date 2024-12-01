import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Chip } from "@mui/material";
import "./TransactionHistory.css";

const transactions = [
  { id: "#002434", date: "Today, 2:00 AM", amount: "$1430", status: "Completed" },
  { id: "#984947", date: "5 Aug, 1:45 PM", amount: "$302", status: "Pending" },
  { id: "#985784", date: "7 hours ago", amount: "$682", status: "Failed" },
];

const TransactionHistory = () => (
  <Box
    sx={{
      backgroundColor: "#fff",
      borderRadius: 2,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      p: 3,
    }}
  >
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
      Transaction History
    </Typography>
    <List>
      {transactions.map((transaction) => (
        <ListItem
          key={transaction.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #f0f0f0",
            py: 1,
            "&:last-child": {
              borderBottom: "none",
            },
          }}
        >
          <ListItemText
            primary={`Order ${transaction.id}`}
            secondary={transaction.date}
            primaryTypographyProps={{ fontWeight: 500, fontSize: "0.9rem" }}
            secondaryTypographyProps={{ fontSize: "0.8rem", color: "#888" }}
          />
          <Typography
            sx={{ fontWeight: 500, fontSize: "0.9rem", color: "#333" }}
          >
            {transaction.amount}
          </Typography>
          <Chip
            label={transaction.status}
            color={
              transaction.status === "Completed"
                ? "success"
                : transaction.status === "Pending"
                ? "warning"
                : "error"
            }
            sx={{
              fontSize: "0.8rem",
              textTransform: "capitalize",
              minWidth: 80,
              textAlign: "center",
            }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default TransactionHistory;

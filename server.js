
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN
    ? process.env.FRONTEND_ORIGIN.split(",").map(v => v.trim())
    : true
}));

app.use(express.json({ limit: "100kb" }));

// Home
app.get("/", (_req, res) => {
  res.json({
    app: "TradeSaathi Pro API",
    status: "running",
    note: "Backend starter. Live market data and Angel One login are not connected yet."
  });
});

// Health check
app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "tradesaathi-pro-backend"
  });
});

// Angel One callback test route
app.get("/angel/callback", (req, res) => {
  res.send("TradeSaathi Pro: Angel One callback received.");
});

// Angel One connection status
app.get("/api/angel/status", (_req, res) => {
  res.json({
    configured: Boolean(process.env.ANGEL_API_KEY),
    connected: false,
    message: "Angel One SmartAPI session is not connected yet."
  });
});

// Error handler
app.use((err, _req, res, _next) => {
  console.error("API error:", err.message);
  res.status(500).json({
    error: "Internal server error"
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`TradeSaathi Pro API listening on ${PORT}`);
});

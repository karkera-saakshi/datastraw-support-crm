require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes")
let app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tickets",bookingRoutes);
const PORT = process.env.PORT || 9000;
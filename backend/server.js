require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes")
let app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tickets",bookingRoutes);
app.listen(9000,()=>console.log("I am listening"));
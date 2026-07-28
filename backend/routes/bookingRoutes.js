const express = require("express");
const bookingController = require("../controllers/bookingController");
let router = express.Router();
router.post("/",bookingController.createTicket);
router.get("/",bookingController.getAllTickets);
router.get("/:ticket_id", bookingController.getTicketById);
router.put("/:ticket_id", bookingController.updateTicket);
module.exports = router;

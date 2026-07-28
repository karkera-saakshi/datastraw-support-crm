const bookingModel = require("../models/bookingModel");

let createTicket = (req, res) =>{
    bookingModel.createTicket(req.body, res);
}

let getAllTickets = (req, res) => {
    bookingModel.getAllTickets(req.query, res);
}

let getTicketById = (req, res) =>{
    bookingModel.getTicketById(req.params.ticket_id, res);
}

let updateTicket = (req, res) =>{
    bookingModel.updateTicket(req.params.ticket_id, req.body, res);
}

module.exports = { createTicket, getAllTickets, getTicketById, updateTicket};

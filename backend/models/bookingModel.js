const { MongoClient, ObjectId } = require("mongodb");

let url = process.env.MONGO_URL;
let getCollection = () => {
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("support-CRM");
    let col = db.collection("tickets");
    return { client, coll};
};

let createTicket  = () =>
{

}

let getAllTickets = () =>
{

}

let getTicketById = () =>
{

}

let updateTicket = () =>
{
    
}

module.exports = { createTicket, getAllTickets, getTicketById, updateTicket};

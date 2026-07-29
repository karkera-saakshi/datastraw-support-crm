const { MongoClient, ObjectId } = require("mongodb");

let url = process.env.MONGO_URI;
let getCollection = () => {
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("support-CRM");
    let col = db.collection("tickets");
    return { client, coll};
};

let createTicket  = async (obj, res) =>
{
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db("support-CRM");
    let coll = db.collection("tickets");
    await coll.insertOne(obj)
    .then((result)=> res.send(result))
    .catch((err)=>res.status(500).send(err))
    .finally (()=>client.close())
}

let getAllTickets = () =>
{

}

let getTicketById = () =>
{

}

let updateTicket = (id, data, res) =>
{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("support-CRM");
    let coll = db.collection("tickets");
    coll.updateOne({_id: new ObjectId(id)}, {$set: data})
    .then((result)=>res.send(result))
    .catch((err)=>res(err))
    .finally(()=>client.close())
}

module.exports = { createTicket, getAllTickets, getTicketById, updateTicket};

const { MongoClient, ObjectId } = require("mongodb");

let url = process.env.MONGO_URI;
let getCollection = () => {
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("support-CRM");
    let coll = db.collection("tickets");
    return { client, coll};
};

let createTicket  = (obj, res) =>
{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("support-CRM");
    let coll = db.collection("tickets");
    coll.insertOne(obj)
    .then((result)=> res.send(result))
    .catch((err)=>res.status(500).send(err))
    .finally (()=>client.close())
}

let getAllTickets = (req, res) => {
    let client = new MongoClient(url);
    const { search, status } = req.query;
    let query = {};
    if (status) {
        query.status = status; 
    }
    if (search) {
        let searchConditions = [
            { email: { $regex: search, $options: "i" } },      
            { description: { $regex: search, $options: "i" } } 
        ];
        if (ObjectId.isValid(search)) {
            searchConditions.push({ _id: new ObjectId(search) });
        }
        query.$or = searchConditions;
    }
    client.connect()
        .then(() => {
            let db = client.db("support-CRM");
            let coll = db.collection("tickets");
            return coll.find(query).toArray();
        })
        .then((tickets) => {
            res.status(200).send(tickets);
        })
        .catch((err) => {
            res.status(500).send({ error: err.message });
        })
        .finally(() => {
            client.close();
        });
};

let getTicketById = (id, res) =>
{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("support-CRM");
    let coll = db.collection("tickets");
    coll.findOne({ _id: new ObjectId(id) })
    .then((result) => res.send(result))
    .catch((err) => res.send(err))
    .finally(() => client.close());
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

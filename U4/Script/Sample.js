const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";
const client= new MongoClient(url);

async function main() {
    try{
        await client.connect();

        const db=client.db("WAF"); 
        const users= db.collection("Table");

        
    }
}
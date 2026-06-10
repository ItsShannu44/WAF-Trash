const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'nodeDB';
const collectionName = "emp-collection";

const client = new MongoClient(url);

async function main()
{
    try{
        await client.connect();
        console.log("Connected successfully to MongoDB");

        const db = client.db(dbName);

        const collection=db.collection(collectionName);
        const insertResult =
        await collection.insertOne({ id : 1, name: 'Vijayalakshmi' , age : 24});
        console.log("Document inserted:", insertResult.insertedId);

        const documents = await collection.find({}). toArray();
        console.log('Documents found:', documents);
    }
    catch(err)
    {
        console.error("An error occured:", err);
    }
    finally{
        await client.close();
    }
}


main().catch(console.error);
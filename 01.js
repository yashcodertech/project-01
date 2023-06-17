const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

async function connectToMongoDB() {
    try {
        const client = new MongoClient(uri);

        // Connect to the MongoDB server
        await client.connect();

        console.log('Connected to MongoDB successfully');

        // Further operations with the database can be performed here

        // Close the connection
        await client.close();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();

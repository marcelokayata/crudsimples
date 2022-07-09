const mongoose = require('mongoose')
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = await MongoMemoryServer.create();

//connect to db
module.exports.connect = async () => {
    const uri = mongod.getUri();
    const mongooseOpts = {
        URLSearchParams: true,
        useUnifiedTopology: true,
        poolSize: 10
    };
    await mongoose.connect(uri, mongooseOpts);
}

// disconnect and close connection
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

//clear the db, remove all data
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}
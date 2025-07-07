import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/crud";

let db;

async function connectDB() {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected!");
        await initDB();
    } catch (error) {
        console.error('MongoDB connected error:', error);
    }
}

async function initDB() {
    db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    const exists = collections.some((c => c.name === "posts"));

    if (exists) {
        console.log("CRUD collections already exists!");
    } else {
        await db.createCollection("posts");
        console.log("CRUD collections created!");
    }
}

function getDb() {
    if (!db) {
        throw new Error("MongoDB does not exist!");
    }
    return db;
}

function getCollection() {
    return db.collection("posts");
}

export { connectDB, getDb, getCollection };
import mongoose, { Mongoose } from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("Please define the MONGO_URL environment variable inside .env.local");
}

interface MongooseCache {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {

    var mongoose: MongooseCache;
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const normalizedUrl = MONGO_URL!.endsWith('/') ? MONGO_URL!.slice(0, -1) : MONGO_URL!;

        const opts = {
            bufferCommands: false,
            dbName: "edsuuu",
        };

        cached.promise = mongoose.connect(normalizedUrl, opts).then((m) => {
            console.log("MongoDB connected successfully to:", normalizedUrl.split('@')[1] || normalizedUrl);
            return m;
        }).catch((err) => {
            console.error("MongoDB connection error:", err.message);
            throw err;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;

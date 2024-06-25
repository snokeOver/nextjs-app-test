import { MongoClient } from "mongodb";

let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const url = process.env.NEXT_PUBLIC_MONGOURL;
    const client = new MongoClient(url);
    db = client.db("next-car-doctor");
    return db;
  } catch (error) {
    // console.log(error.message);
  }
};

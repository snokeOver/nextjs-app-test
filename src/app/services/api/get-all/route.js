import { connectDB } from "@/helper/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const serviceCollection = db.collection("services");

  try {
    const response = await serviceCollection.find().toArray();
    return NextResponse.json({ response });
  } catch (error) {
    // console.log(error.message);
    return NextResponse.json({ message: "Something went wrong", error });
  }
};

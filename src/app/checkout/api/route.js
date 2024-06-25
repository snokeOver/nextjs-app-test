import { connectDB } from "@/helper/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const booking = await request.json();

  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  try {
    const res = await bookingCollection.insertOne(booking);
    return NextResponse.json({ message: "Service Booked Successfully" });
  } catch (error) {
    // console.log(error.message);
    return NextResponse.json({ message: "Something went wrong", error });
  }
};

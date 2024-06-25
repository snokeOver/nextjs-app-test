import { connectDB } from "@/helper/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  console.log({ email });
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  try {
    const responseData = await bookingCollection.find({ email }).toArray();
    console.log(responseData);
    return NextResponse.json({ responseData });
  } catch (error) {
    // console.log(error.message);
    return NextResponse.json({ message: "Something went wrong", error });
  }
};

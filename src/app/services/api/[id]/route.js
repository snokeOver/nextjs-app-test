import { connectDB } from "@/helper/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const serviceCollection = db.collection("services");
  try {
    const res = await serviceCollection.findOne({
      _id: ObjectId.createFromHexString(params.id),
    });
    return NextResponse.json({ res });
  } catch (error) {
    // console.log(error.message);
    return NextResponse.json({ message: "Something went wrong", error });
  }
};

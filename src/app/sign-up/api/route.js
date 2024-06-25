import { connectDB } from "@/helper/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const newUser = await request.json();
    const db = await connectDB();
    const userCollection = db.collection("users");
    const isExist = await userCollection.findOne({ email: newUser.email });
    if (isExist) {
      return NextResponse.json({ message: "User Exists" }, { status: 304 });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(newUser.password, salt);
    newUser.password = hashedPass;
    newUser.type = "User";

    const response = await userCollection.insertOne(newUser);
    // console.log(response);
    return NextResponse.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    // console.log(error.message);
    return NextResponse.json(
      { message: "Something went wrong:", error },
      { status: 500 }
    );
  }
};

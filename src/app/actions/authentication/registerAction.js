"use server";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

const registerAction = async (payload) => {
  const userCollection = dbConnect(collectionNames.USERS);

  const { name, email, password } = payload;
  if (!name || !email) {
    return null;
  }
  const user = await userCollection.findOne({ email });
  if (!user) {
    let hashPassword = await bcrypt.hash(password, 10);
    payload.password = hashPassword;

    const result = await userCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();

    return result;
  }

  return null;
};

export default registerAction;

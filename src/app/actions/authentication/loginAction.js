"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

const loginAction = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNames.USERS);
  let user = await userCollection.findOne({ email });

  if (!user) {
    return null;
  }

  //   let isPasswordCompare = await bcrypt.compare(password, user.password);
  const matchPassword = await bcrypt.compare(password, user.password);
  console.log("matchPassword", matchPassword);
  if (!matchPassword) {
    return null;
  }

  return user;
};

export default loginAction;

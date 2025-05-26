"use client";
import { SessionProvider } from "next-auth/react";

const NextAuthProviders = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProviders;

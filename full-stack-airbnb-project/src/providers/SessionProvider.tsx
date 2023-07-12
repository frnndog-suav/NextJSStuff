"use client";

import { SessionProvider } from "next-auth/react";
import { FC } from "react";

interface NextAuthSessionProviderProps {
  children: React.ReactNode;
}

const NextAuthSessionProvider: FC<NextAuthSessionProviderProps> = ({
  children,
}) => <SessionProvider>{children}</SessionProvider>;

export default NextAuthSessionProvider;

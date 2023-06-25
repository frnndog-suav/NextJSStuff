"use client";

import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => (
  <SessionProvider>{children}</SessionProvider>
);

export default Provider;

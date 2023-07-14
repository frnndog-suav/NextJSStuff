import LoginModal from "@/components/Modals/LoginModal/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal/RegisterModal";
import Navbar from "@/components/Navbar/Navbar";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import RentModal from "@/components/Modals/RentModal/RentModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "This is a full stack next js example project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <NextAuthSessionProvider>
          <Navbar />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}

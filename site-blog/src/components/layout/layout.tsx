import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";

type TLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter", // mesmo nome contindo no arquivo de configuração tailwind.config.ts
});
const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans", // mesmo nome contindo no arquivo de configuração tailwind.config.ts
});

export function Layout({ children }: TLayoutProps) {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col dark font-inter`}
    >
      <Header />
      <main className="flex-1 flex flex-col mb-12 mt-10">{children}</main>
      <Footer />
    </div>
  );
}

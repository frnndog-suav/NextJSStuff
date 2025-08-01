import { Header } from "../header";

type TLayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: TLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col dark">
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
    </div>
  );
}

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-slate-400">
      <h2 className="text-4xl text-green-400">Hello World</h2>
      <Button variant="secondary" className="bg-red-500">Botão</Button>
    </div>
  );
}

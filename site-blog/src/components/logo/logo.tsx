import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} title="Página inicial">
      <Image src="/logo.svg" alt="Logo" width={116} height={32} />
    </Link>
  );
}

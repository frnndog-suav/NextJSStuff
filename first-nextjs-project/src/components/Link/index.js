import Link from "../../../node_modules/next/link";

export default function LinkRedirect({ children, href }) {
  return (
    <Link href={href} passHref>
      {children}
    </Link>
  );
}

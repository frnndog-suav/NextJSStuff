import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");
  //Ver o que é isso
  // const token = request.cookies.get("next-auth.csrf-token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signIn", request.url));
  }

  // if (request.nextUrl.pathname.startsWith("/userPost")) {
  //   return NextResponse.redirect(new URL("/privatePage", request.url));
  // }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/userPost/:path*", "/privatePage/:path*"],
};

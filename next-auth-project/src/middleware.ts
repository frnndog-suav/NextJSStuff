import { useSession } from "next-auth/react";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  console.log("request", request)

  console.log("request", request.credentials)

  if (request.nextUrl.pathname.startsWith("/userPost")) {
    // console.log("passou===================")
  }

  return NextResponse.redirect(new URL("/auth/signIn", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/userPost/:path"],
};

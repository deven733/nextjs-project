import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Placeholder for authenticated users set
const AUTHENTICATED_USERS = new Set<string>();

export function middleware(request: NextRequest) {
  // Extract necessary values from the request
  const userAgent = request.headers.get("user-agent") || "";
  const abTestCookie = request.cookies.get("ab-test")?.value;
  const authToken = request.cookies.get("auth-token")?.value;

  // Block bots based on user-agent
  if (userAgent.toLowerCase().includes("bot")) {
    return new NextResponse("Bots are not allowed", { status: 403 });
  }

  // Redirect unauthenticated users trying to access dashboard
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!authToken || !AUTHENTICATED_USERS.has(authToken)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Redirect requests to blocked paths
  if (request.nextUrl.pathname.startsWith("/blocked")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Create a response and set custom headers
  const response = NextResponse.next();
  response.headers.set("X-AB-Test-Variant", abTestCookie || "A");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Content-Type-Options", "nosniff");

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*", // Apply middleware to dashboard routes
    "/blocked/:path*",   // Apply middleware to blocked routes
    "/:path*"            // Apply middleware globally if needed
  ],
};
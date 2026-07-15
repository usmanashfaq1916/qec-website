import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedPaths: Record<string, string[]> = {
  "/portal/student": ["STUDENT"],
  "/portal/parent": ["PARENT"],
  "/portal/teacher": ["TEACHER"],
  "/portal/management": ["ADMIN"],
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  const matchedPath = Object.keys(protectedPaths).find((p) => pathname.startsWith(p))

  if (matchedPath) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET })

    if (!token) {
      const loginUrl = new URL("/login", req.url)
      loginUrl.searchParams.set("callbackUrl", pathname)
      return NextResponse.redirect(loginUrl)
    }

    const allowedRoles = protectedPaths[matchedPath]
    if (allowedRoles && !allowedRoles.includes(token.role as string)) {
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/portal/:path*"],
}

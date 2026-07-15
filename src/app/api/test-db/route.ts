import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const envCheck = {
    hasDbUrl: !!process.env.DATABASE_URL,
    dbUrlPrefix: process.env.DATABASE_URL?.substring(0, 20),
    hasAuthSecret: !!process.env.AUTH_SECRET,
    nodeEnv: process.env.NODE_ENV,
  }

  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, name: true, role: true },
    })
    return NextResponse.json({
      success: true,
      userCount: users.length,
      users: users.map((u) => ({ email: u.email, name: u.name, role: u.role })),
      env: envCheck,
    })
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
      env: envCheck,
    })
  }
}
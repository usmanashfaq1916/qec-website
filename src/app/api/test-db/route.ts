import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const dbUrl = process.env.DATABASE_URL
  const envCheck = {
    hasDbUrl: !!dbUrl,
    dbUrlPrefix: dbUrl?.substring(0, 30),
    dbUrlLength: dbUrl?.length,
    hasAuthSecret: !!process.env.AUTH_SECRET,
    nodeEnv: process.env.NODE_ENV,
  }

  if (!dbUrl) {
    return NextResponse.json({ success: false, error: "DATABASE_URL not set", env: envCheck })
  }

  // Test using Neon native HTTP driver
  try {
    const sql = neon(dbUrl)
    const neonResult = await sql`SELECT id, email, name, role FROM users LIMIT 2`
    return NextResponse.json({
      success: true,
      method: "neon-http",
      userCount: neonResult.length,
      users: neonResult,
      env: envCheck,
    })
  } catch (neonErr) {
    return NextResponse.json({
      success: false,
      method: "neon-http",
      error: neonErr instanceof Error ? neonErr.message : String(neonErr),
      errorName: neonErr instanceof Error ? neonErr.name : typeof neonErr,
      env: envCheck,
    })
  }
}
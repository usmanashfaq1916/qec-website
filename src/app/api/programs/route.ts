import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const programs = await prisma.program.findMany({ orderBy: [{ level: "asc" }, { name: "asc" }] })
  return NextResponse.json(programs)
}

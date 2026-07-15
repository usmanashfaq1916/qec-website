import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const campuses = await prisma.campus.findMany({ orderBy: { name: "asc" } })
  return NextResponse.json(campuses)
}

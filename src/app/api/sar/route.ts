import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const reports = await prisma.sARReport.findMany({ orderBy: { year: "desc" } })
  return NextResponse.json(reports)
}

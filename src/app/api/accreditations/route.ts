import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const accreditations = await prisma.accreditation.findMany({ orderBy: { createdAt: "desc" } })
  return NextResponse.json(accreditations)
}

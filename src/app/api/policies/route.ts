import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const policies = await prisma.qualityPolicy.findMany({ orderBy: { title: "asc" } })
  return NextResponse.json(policies)
}

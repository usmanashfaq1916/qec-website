import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const downloads = await prisma.download.findMany({ orderBy: [{ category: "asc" }, { name: "asc" }] })
  return NextResponse.json(downloads)
}

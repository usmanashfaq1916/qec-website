import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const campus = await prisma.campus.findUnique({ where: { slug } })
  if (!campus) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(campus)
}

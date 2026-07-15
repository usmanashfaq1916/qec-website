import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const faculty = await prisma.faculty.findMany({
    include: { department: true, user: { select: { email: true } } },
    orderBy: { name: "asc" },
  })
  return NextResponse.json(faculty)
}

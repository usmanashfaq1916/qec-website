import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const message = await prisma.contactMessage.create({
    data: {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
    },
  })
  return NextResponse.json(message, { status: 201 })
}

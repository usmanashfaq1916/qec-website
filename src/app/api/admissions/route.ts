import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const applicationId = req.nextUrl.searchParams.get("applicationId")
  if (!applicationId) return NextResponse.json({ error: "applicationId required" }, { status: 400 })
  const admission = await prisma.admission.findUnique({ where: { applicationId } })
  if (!admission) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(admission)
}

export async function POST(req: Request) {
  const body = await req.json()
  const year = new Date().getFullYear()
  const count = await prisma.admission.count()
  const applicationId = `QEC-${year}-${String(count + 1).padStart(4, "0")}`

  const admission = await prisma.admission.create({
    data: {
      applicationId,
      studentName: body.studentName,
      fatherName: body.fatherName,
      cnicBform: body.cnicBform,
      dateOfBirth: body.dateOfBirth,
      gender: body.gender,
      mobileNumber: body.mobileNumber,
      email: body.email,
      address: body.address,
      previousSchool: body.previousSchool,
      campusId: body.campusId,
      programId: body.programId,
      status: "Submitted",
    },
  })

  return NextResponse.json(admission, { status: 201 })
}

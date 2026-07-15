import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const [totalStudents, totalFaculty, totalCampuses, totalAdmissions, recentAdmissions] = await Promise.all([
    prisma.user.count({ where: { role: "STUDENT" } }),
    prisma.user.count({ where: { role: "TEACHER" } }),
    prisma.campus.count(),
    prisma.admission.count(),
    prisma.admission.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ])

  return NextResponse.json({
    totalStudents,
    totalFaculty,
    totalCampuses,
    totalAdmissions,
    recentAdmissions,
  })
}

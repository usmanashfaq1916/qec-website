import "dotenv/config"
import { PrismaClient } from "../src/lib/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("Seeding database...")

  // Clean existing data
  await prisma.download.deleteMany()
  await prisma.galleryItem.deleteMany()
  await prisma.accreditation.deleteMany()
  await prisma.sARReport.deleteMany()
  await prisma.qualityPolicy.deleteMany()
  await prisma.contactMessage.deleteMany()
  await prisma.event.deleteMany()
  await prisma.news.deleteMany()
  await prisma.admission.deleteMany()
  await prisma.faculty.deleteMany()
  await prisma.student.deleteMany()
  await prisma.program.deleteMany()
  await prisma.department.deleteMany()
  await prisma.campus.deleteMany()
  await prisma.session.deleteMany()
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()

  // === Users ===
  const adminPassword = await bcrypt.hash("admin123", 10)
  const teacherPassword = await bcrypt.hash("teacher123", 10)
  const studentPassword = await bcrypt.hash("student123", 10)
  const parentPassword = await bcrypt.hash("parent123", 10)

  await prisma.user.createMany({
    data: [
      { email: "admin@qaeducomplex.edu.pk", name: "Admin User", password: adminPassword, role: "ADMIN" },
      { email: "teacher1@qaeducomplex.edu.pk", name: "Dr. Ahmed Khan", password: teacherPassword, role: "TEACHER" },
      { email: "teacher2@qaeducomplex.edu.pk", name: "Prof. Fatima Ali", password: teacherPassword, role: "TEACHER" },
      { email: "teacher3@qaeducomplex.edu.pk", name: "Mr. Omar Hassan", password: teacherPassword, role: "TEACHER" },
      { email: "teacher4@qaeducomplex.edu.pk", name: "Ms. Sara Ahmed", password: teacherPassword, role: "TEACHER" },
      { email: "teacher5@qaeducomplex.edu.pk", name: "Dr. Muhammad Usman", password: teacherPassword, role: "TEACHER" },
      { email: "teacher6@qaeducomplex.edu.pk", name: "Ms. Ayesha Khan", password: teacherPassword, role: "TEACHER" },
      { email: "student1@qaeducomplex.edu.pk", name: "Ali Hassan", password: studentPassword, role: "STUDENT" },
      { email: "student2@qaeducomplex.edu.pk", name: "Sana Malik", password: studentPassword, role: "STUDENT" },
      { email: "parent1@qaeducomplex.edu.pk", name: "Mr. Hassan Ahmed", password: parentPassword, role: "PARENT" },
    ],
  })

  // === Campuses ===
  await prisma.campus.createMany({
    data: [
      { name: "Chowk Begum Kot Campus", slug: "chowk-begum-kot", location: "Chowk Begum Kot, Lahore", phone: "+92-XXX-XXXXXXX", email: "chowkbegumkot@qaeducomplex.edu.pk", students: "2,500+", faculty: "120+", description: "Our flagship campus at the head office location offering comprehensive educational programs.", programs: "Matric, Intermediate, Professional Courses", facilities: ["Science Laboratories", "Computer Lab", "Library", "Sports Ground", "Auditorium", "Cafeteria"] },
      { name: "Kot Shabudin Campus", slug: "kot-shabudin", location: "Shahdara, Lahore", phone: "+92-XXX-XXXXXXX", email: "kots@qaeducomplex.edu.pk", students: "1,800+", faculty: "90+", description: "A vibrant campus in Shahdara providing quality education with a focus on academic excellence.", programs: "Matric, Intermediate", facilities: ["Science Laboratories", "Computer Lab", "Library", "Sports Facilities", "Transportation"] },
      { name: "Kot Abdul Malik Campus", slug: "kot-abdul-malik", location: "Kot Abdul Malik, Lahore", phone: "+92-XXX-XXXXXXX", email: "kotabdulmalik@qaeducomplex.edu.pk", students: "2,000+", faculty: "100+", description: "Serving the Kot Abdul Malik community with dedicated faculty and modern learning resources.", programs: "Matric, Intermediate", facilities: ["Science Labs", "Computer Lab", "Library", "Playground", "Transportation"] },
      { name: "Al Rehman Garden Campus", slug: "al-rehman-garden", location: "Al Rehman Garden, Lahore", phone: "+92-XXX-XXXXXXX", email: "alrehman@qaeducomplex.edu.pk", students: "1,500+", faculty: "80+", description: "A modern campus equipped with state-of-the-art facilities for holistic student development.", programs: "Matric, Intermediate, Professional Courses", facilities: ["Modern Classrooms", "Science Labs", "Computer Lab", "Library", "Sports Ground", "Cafeteria"] },
      { name: "Quaid Lyceum Campus", slug: "quaid-lyceum", location: "Lahore", phone: "+92-XXX-XXXXXXX", email: "quaidlyceum@qaeducomplex.edu.pk", students: "2,200+", faculty: "110+", description: "Our lyceum campus offering both local and international curriculum pathways.", programs: "Matric, Intermediate, O/A Levels", facilities: ["Science Laboratories", "Computer Lab", "Library", "Auditorium", "Sports Complex", "Transportation"] },
    ],
  })

  // === Departments ===
  await prisma.department.createMany({
    data: [
      { name: "Science Department" },
      { name: "Humanities Department" },
      { name: "Computer Science Department" },
      { name: "Commerce Department" },
      { name: "Mathematics Department" },
      { name: "Languages Department" },
    ],
  })

  // === Programs ===
  await prisma.program.createMany({
    data: [
      { level: "School", name: "Matriculation Science", duration: "2 Years" },
      { level: "School", name: "Matriculation Arts", duration: "2 Years" },
      { level: "School", name: "O-Levels", duration: "2 Years" },
      { level: "College", name: "FSc Pre-Medical", duration: "2 Years" },
      { level: "College", name: "FSc Pre-Engineering", duration: "2 Years" },
      { level: "College", name: "FA (Humanities)", duration: "2 Years" },
      { level: "College", name: "ICS (Computer Science)", duration: "2 Years" },
      { level: "College", name: "I.Com (Commerce)", duration: "2 Years" },
      { level: "College", name: "A-Levels", duration: "2 Years" },
      { level: "Professional", name: "Graphic Design", duration: "6 Months" },
      { level: "Professional", name: "Web Development", duration: "6 Months" },
      { level: "Professional", name: "English Language", duration: "3 Months" },
      { level: "Professional", name: "Computer Applications", duration: "6 Months" },
    ],
  })

  // === Faculty ===
  const users = await prisma.user.findMany({ where: { role: "TEACHER" }, orderBy: { email: "asc" } })
  const departments = await prisma.department.findMany({ orderBy: { name: "asc" } })
  const roles = ["Principal", "Vice Principal", "Head of Science", "Head of Computer Science", "Professor", "Head of English"]
  const quals = ["PhD Mathematics", "PhD English Literature", "MSc Physics", "MS Computer Science", "PhD Chemistry", "MA English"]
  const exps = ["20 Years", "18 Years", "15 Years", "12 Years", "16 Years", "14 Years"]

  for (let i = 0; i < users.length; i++) {
    await prisma.faculty.create({
      data: {
        userId: users[i].id,
        name: users[i].name!,
        role: roles[i],
        qualification: quals[i],
        experience: exps[i],
        departmentId: i < 2 ? departments[0].id : i < 4 ? departments[2].id : departments[1].id,
      },
    })
  }

  // === News ===
  await prisma.news.createMany({
    data: [
      { title: "Annual Quality Assurance Workshop 2026", date: "March 15, 2026", category: "Event", excerpt: "Join us for the annual QA workshop focusing on best practices in self-assessment and continuous improvement." },
      { title: "New Accreditation Achieved for Engineering Programs", date: "February 28, 2026", category: "Announcement", excerpt: "Our engineering programs have successfully achieved international accreditation." },
      { title: "Faculty Training Session on Assessment Techniques", date: "February 10, 2026", category: "Training", excerpt: "A professional development session on modern assessment techniques and rubrics design for faculty." },
      { title: "SAR Submission Deadline Extended", date: "January 25, 2026", category: "Notice", excerpt: "The deadline for Self-Assessment Report submissions has been extended to March 30, 2026." },
      { title: "QEC Quarterly Review Meeting", date: "January 5, 2026", category: "Event", excerpt: "Quarterly review meeting to discuss progress on quality assurance initiatives." },
      { title: "Student Satisfaction Survey 2025 Results Published", date: "December 20, 2025", category: "Announcement", excerpt: "The results of the annual student satisfaction survey are now available for review." },
    ],
  })

  // === Events ===
  await prisma.event.createMany({
    data: [
      { title: "Annual Sports Day 2026", date: "April 15, 2026", description: "Inter-campus sports competitions including athletics, cricket, football, and badminton." },
      { title: "Parent Teacher Meeting", date: "March 25, 2026", description: "Quarterly parent-teacher meeting to discuss student progress and development." },
      { title: "Spring Festival 2026", date: "March 10, 2026", description: "Cultural festival featuring performances, competitions, and exhibitions." },
      { title: "Admissions Open Day", date: "February 20, 2026", description: "Open house for prospective students and parents to tour our campuses." },
    ],
  })

  // === Quality Policies ===
  await prisma.qualityPolicy.createMany({
    data: [
      { title: "Quality Assurance Policy", description: "Framework for maintaining and enhancing academic standards across all programs and departments." },
      { title: "Curriculum Review Policy", description: "Guidelines for periodic review and revision of curricula to ensure relevance and modernity." },
      { title: "Assessment & Evaluation Policy", description: "Standards for fair, transparent, and reliable student assessment and program evaluation." },
      { title: "Research Quality Policy", description: "Policies to promote high-quality research output and ethical research practices." },
      { title: "Faculty Development Policy", description: "Programs and guidelines for continuous professional development of faculty members." },
      { title: "Documentation & Records Policy", description: "Standards for maintaining, storing, and retrieving quality-related documentation and records." },
    ],
  })

  // === SAR Reports ===
  await prisma.sARReport.createMany({
    data: [
      { program: "BS Computer Science", year: "2025", status: "Completed", type: "Self-Assessment Report" },
      { program: "BS Business Administration", year: "2025", status: "Completed", type: "Self-Assessment Report" },
      { program: "BS Electrical Engineering", year: "2024", status: "Completed", type: "Self-Assessment Report" },
      { program: "BS Mathematics", year: "2024", status: "Completed", type: "Self-Assessment Report" },
      { program: "MS Data Science", year: "2025", status: "In Progress", type: "Program Review" },
      { program: "PhD Economics", year: "2024", status: "Completed", type: "Program Review" },
    ],
  })

  // === Accreditations ===
  await prisma.accreditation.createMany({
    data: [
      { body: "International Accreditation Council", status: "Accredited", programs: ["BS Computer Science", "BS Electrical Engineering"], validUntil: "2028" },
      { body: "National Accreditation Board", status: "Accredited", programs: ["BS Business Administration", "BS Economics"], validUntil: "2027" },
      { body: "Quality Assurance Agency", status: "In Progress", programs: ["MS Data Science", "MS Artificial Intelligence"], validUntil: "2026" },
      { body: "Professional Engineering Council", status: "Accredited", programs: ["BS Electrical Engineering", "BS Mechanical Engineering"], validUntil: "2029" },
    ],
  })

  // === Gallery Items ===
  const categories = ["Campus Life", "Academic Activities", "Sports", "Events", "Seminars", "Labs"]
  const titles = [
    "Campus Panorama", "Classroom Session", "Science Lab", "Sports Day",
    "Annual Event", "Seminar Hall", "Computer Lab", "Library",
    "Cultural Day", "Award Ceremony", "Playing Ground", "Art Exhibition",
    "Debate Competition", "Graduation Day", "Teachers Training", "Field Trip",
    "Morning Assembly", "Music Room", "Cafeteria", "Auditorium",
    "Sports Trophy", "Workshop", "Conference", "Study Group",
  ]
  const catIdx = [0, 0, 5, 2, 3, 3, 5, 0, 3, 3, 2, 1, 1, 3, 1, 1, 0, 1, 0, 3, 2, 5, 5, 0]
  await prisma.galleryItem.createMany({
    data: titles.map((title, i) => ({ title, category: categories[catIdx[i]] })),
  })

  // === Downloads ===
  const downloadCategories = [
    { cat: "Forms", files: ["Course Evaluation Form", "Faculty Performance Review Form", "Student Feedback Form", "Program Self-Assessment Form"] },
    { cat: "Manuals", files: ["Quality Assurance Manual", "SAR Writing Guidelines", "Assessment Handbook", "Faculty Development Guide"] },
    { cat: "Templates", files: ["SAR Template", "Course File Template", "Lesson Plan Template", "Annual Report Template"] },
    { cat: "Reports", files: ["Annual Quality Report 2025", "Program Review Summary 2024", "Accreditation Status Report", "Student Satisfaction Survey Results"] },
  ]
  await prisma.download.createMany({
    data: downloadCategories.flatMap((dc) => dc.files.map((file) => ({ category: dc.cat, name: file }))),
  })

  console.log("Database seeded successfully!")
  console.log("---")
  console.log("Admin login: admin@qaeducomplex.edu.pk / admin123")
  console.log("Teacher login: teacher1@qaeducomplex.edu.pk / teacher123")
  console.log("Student login: student1@qaeducomplex.edu.pk / student123")
  console.log("Parent login: parent1@qaeducomplex.edu.pk / parent123")
}

main()
  .catch((e) => {
    console.error("Seed error:", e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

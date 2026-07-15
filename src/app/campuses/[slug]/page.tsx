"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { School, MapPin, Phone, Mail, BookOpen, Users, ArrowLeft, GraduationCap, Award } from "lucide-react"

const campusData: Record<string, {
  name: string
  location: string
  phone: string
  email: string
  students: string
  faculty: string
  programs: string[]
  facilities: string[]
  description: string
}> = {
  "chowk-begum-kot": {
    name: "Chowk Begum Kot Campus",
    location: "Chowk Begum Kot, Lahore, Punjab, Pakistan",
    phone: "+92-XXX-XXXXXXX",
    email: "chowkbegumkot@qaeducomplex.edu.pk",
    students: "2,500+",
    faculty: "120+",
    programs: ["Matriculation (Science/Arts)", "Intermediate (FSc, FA, ICS, I.Com)", "Professional Courses"],
    facilities: ["Science Laboratories", "Computer Lab", "Library", "Sports Ground", "Auditorium", "Cafeteria"],
    description: "Our flagship campus at the head office location in Chowk Begum Kot. This campus offers a comprehensive range of academic programs from matriculation to professional courses, equipped with modern facilities to support holistic student development.",
  },
  "kot-shabudin": {
    name: "Kot Shabudin Campus",
    location: "Shahdara, Lahore, Punjab, Pakistan",
    phone: "+92-XXX-XXXXXXX",
    email: "kots@qaeducomplex.edu.pk",
    students: "1,800+",
    faculty: "90+",
    programs: ["Matriculation (Science/Arts)", "Intermediate (FSc, FA, ICS)"],
    facilities: ["Science Laboratories", "Computer Lab", "Library", "Sports Facilities", "Transportation"],
    description: "Located in Shahdara, this campus provides quality education with a strong focus on academic excellence and character development in a nurturing environment.",
  },
  "kot-abdul-malik": {
    name: "Kot Abdul Malik Campus",
    location: "Kot Abdul Malik, Lahore, Punjab, Pakistan",
    phone: "+92-XXX-XXXXXXX",
    email: "kotabdulmalik@qaeducomplex.edu.pk",
    students: "2,000+",
    faculty: "100+",
    programs: ["Matriculation (Science/Arts)", "Intermediate (FSc, FA, ICS)"],
    facilities: ["Science Labs", "Computer Lab", "Library", "Playground", "Transportation"],
    description: "Serving the Kot Abdul Malik community with dedicated faculty and modern learning resources to ensure every student reaches their full potential.",
  },
  "al-rehman-garden": {
    name: "Al Rehman Garden Campus",
    location: "Al Rehman Garden, Lahore, Punjab, Pakistan",
    phone: "+92-XXX-XXXXXXX",
    email: "alrehman@qaeducomplex.edu.pk",
    students: "1,500+",
    faculty: "80+",
    programs: ["Matriculation (Science/Arts)", "Intermediate (FSc, FA, ICS, I.Com)", "Professional Courses"],
    facilities: ["Modern Classrooms", "Science Labs", "Computer Lab", "Library", "Sports Ground", "Cafeteria"],
    description: "A modern campus in Al Rehman Garden equipped with state-of-the-art facilities and experienced faculty dedicated to nurturing the next generation of leaders.",
  },
  "quaid-lyceum": {
    name: "Quaid Lyceum Campus",
    location: "Lahore, Punjab, Pakistan",
    phone: "+92-XXX-XXXXXXX",
    email: "quaidlyceum@qaeducomplex.edu.pk",
    students: "2,200+",
    faculty: "110+",
    programs: ["Matriculation (Science/Arts)", "Intermediate (FSc, FA, ICS)", "O/A Levels", "Professional Courses"],
    facilities: ["Science Laboratories", "Computer Lab", "Library", "Auditorium", "Sports Complex", "Transportation"],
    description: "Our lyceum campus offering both local and international curriculum pathways, preparing students for global opportunities and higher education worldwide.",
  },
}

export default function CampusDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const campus = campusData[slug]

  if (!campus) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-foreground">Campus Not Found</h1>
        <Link href="/campuses" className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary-light">
          <ArrowLeft className="h-4 w-4" /> Back to Campuses
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/campuses" className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Campuses
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {/* Campus Hero */}
        <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary-dark/10 p-8 sm:p-12 mb-10 overflow-hidden">
          <div className="relative z-10">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
              <School className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{campus.name}</h1>
            <div className="flex items-center gap-1.5 mt-2 text-muted">
              <MapPin className="h-4 w-4" />
              {campus.location}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h2 className="text-xl font-bold text-foreground mb-3">About This Campus</h2>
              <p className="text-muted leading-relaxed">{campus.description}</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Programs Offered
              </h2>
              <ul className="space-y-2">
                {campus.programs.map((prog) => (
                  <li key={prog} className="flex items-center gap-2 text-sm text-muted">
                    <GraduationCap className="h-4 w-4 text-accent shrink-0" />
                    {prog}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Facilities
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {campus.facilities.map((facility) => (
                  <div key={facility} className="flex items-center gap-2 text-sm text-muted p-2 rounded-lg bg-primary/5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {facility}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">Students</p>
                    <p className="font-semibold text-foreground">{campus.students}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">Faculty</p>
                    <p className="font-semibold text-foreground">{campus.faculty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-semibold text-foreground text-sm">{campus.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold text-foreground mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted">
                  <Phone className="h-4 w-4 shrink-0" />
                  {campus.phone}
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Mail className="h-4 w-4 shrink-0" />
                  {campus.email}
                </div>
              </div>
            </div>

            <Link
              href="/admissions"
              className="block w-full text-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { BookOpen, GraduationCap, Award, Users, Calendar, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    level: "School Programs",
    icon: BookOpen,
    color: "from-primary/20 to-primary/10",
    items: [
      { name: "Matriculation Science", duration: "2 Years" },
      { name: "Matriculation Arts", duration: "2 Years" },
      { name: "O-Levels", duration: "2 Years" },
    ],
  },
  {
    level: "College Programs",
    icon: GraduationCap,
    color: "from-accent/20 to-accent/10",
    items: [
      { name: "FSc Pre-Medical", duration: "2 Years" },
      { name: "FSc Pre-Engineering", duration: "2 Years" },
      { name: "FA (Humanities)", duration: "2 Years" },
      { name: "ICS (Computer Science)", duration: "2 Years" },
      { name: "I.Com (Commerce)", duration: "2 Years" },
      { name: "A-Levels", duration: "2 Years" },
    ],
  },
  {
    level: "Professional Courses",
    icon: Award,
    color: "from-secondary/20 to-secondary/10",
    items: [
      { name: "Graphic Design", duration: "6 Months" },
      { name: "Web Development", duration: "6 Months" },
      { name: "English Language", duration: "3 Months" },
      { name: "Computer Applications", duration: "6 Months" },
    ],
  },
]

const faculty = [
  { name: "Dr. Ahmed Khan", role: "Principal", qualification: "PhD Mathematics", experience: "20 Years", department: "Science" },
  { name: "Prof. Fatima Ali", role: "Vice Principal", qualification: "PhD English Literature", experience: "18 Years", department: "Humanities" },
  { name: "Mr. Omar Hassan", role: "Head of Science", qualification: "MSc Physics", experience: "15 Years", department: "Science" },
  { name: "Ms. Sara Ahmed", role: "Head of Computer Science", qualification: "MS Computer Science", experience: "12 Years", department: "Computer Science" },
  { name: "Dr. Muhammad Usman", role: "Professor", qualification: "PhD Chemistry", experience: "16 Years", department: "Science" },
  { name: "Ms. Ayesha Khan", role: "Head of English", qualification: "MA English", experience: "14 Years", department: "Humanities" },
]

const departments = [
  "Science Department",
  "Humanities Department",
  "Computer Science Department",
  "Commerce Department",
  "Mathematics Department",
  "Languages Department",
]

export default function AcademicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Academics</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Comprehensive academic programs designed to nurture talent and build successful careers
        </p>
      </motion.div>

      {/* Programs */}
      <div id="programs" className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Programs Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-br ${prog.color}`}>
                <prog.icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground mt-3">{prog.level}</h3>
              </div>
              <div className="p-6 space-y-3">
                {prog.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-card-foreground">{item.name}</span>
                    <span className="text-xs text-muted">{item.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div id="departments" className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
          <Search className="h-6 w-6 text-primary" />
          Departments
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {departments.map((dept, i) => (
            <motion.div
              key={dept}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl border border-border bg-card text-center hover:border-accent/30 transition-colors"
            >
              <div className="text-xs font-semibold text-card-foreground">{dept}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Faculty */}
      <div id="faculty" className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          Our Faculty
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-primary">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-bold text-card-foreground">{member.name}</h3>
              <p className="text-sm text-accent-dark font-medium">{member.role}</p>
              <div className="mt-3 space-y-1 text-xs text-muted">
                <p>Qualification: {member.qualification}</p>
                <p>Experience: {member.experience}</p>
                <p>Department: {member.department}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Academic Calendar */}
      <div id="calendar" className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Academic Calendar</h2>
        </div>
        <p className="text-muted mb-6">
          Our academic year runs from April to March. View the detailed academic calendar for important dates including examinations, holidays, and events.
        </p>
        <Link
          href="/downloads"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all"
        >
          Download Calendar <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

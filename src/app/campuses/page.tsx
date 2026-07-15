"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { School, MapPin, ArrowRight, Users, BookOpen } from "lucide-react"

const campuses = [
  {
    name: "Chowk Begum Kot Campus",
    slug: "chowk-begum-kot",
    location: "Chowk Begum Kot, Lahore",
    programs: "Matric, Intermediate, Professional Courses",
    students: "2,500+",
    description: "Our flagship campus located at the head office, offering comprehensive educational programs from matriculation to professional courses.",
  },
  {
    name: "Kot Shabudin Campus",
    slug: "kot-shabudin",
    location: "Shahdara, Lahore",
    programs: "Matric, Intermediate",
    students: "1,800+",
    description: "A vibrant campus in Shahdara providing quality education with a focus on academic excellence and character building.",
  },
  {
    name: "Kot Abdul Malik Campus",
    slug: "kot-abdul-malik",
    location: "Kot Abdul Malik, Lahore",
    programs: "Matric, Intermediate",
    students: "2,000+",
    description: "Serving the Kot Abdul Malik community with优质 education and modern learning facilities.",
  },
  {
    name: "Al Rehman Garden Campus",
    slug: "al-rehman-garden",
    location: "Al Rehman Garden, Lahore",
    programs: "Matric, Intermediate, Professional Courses",
    students: "1,500+",
    description: "A modern campus in Al Rehman Garden equipped with state-of-the-art facilities for holistic student development.",
  },
  {
    name: "Quaid Lyceum Campus",
    slug: "quaid-lyceum",
    location: "Lahore",
    programs: "Matric, Intermediate, O/A Levels",
    students: "2,200+",
    description: "Our lyceum campus offering both local and international curriculum options for diverse educational pathways.",
  },
]

export default function CampusesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Our Campuses</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Five campuses across Lahore, each providing a unique and enriching educational environment
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campuses.map((campus, i) => (
          <motion.div
            key={campus.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/campuses/${campus.slug}`}
              className="block h-full p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-xl transition-all group"
            >
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <School className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">{campus.name}</h3>
              <div className="flex items-center gap-1.5 mt-2 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {campus.location}
              </div>
              <div className="flex items-center gap-4 mt-3 text-sm text-muted">
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {campus.students} Students
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {campus.programs}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted line-clamp-2">{campus.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                View Campus <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

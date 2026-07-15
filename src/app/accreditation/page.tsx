"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, Clock } from "lucide-react"

const accreditations = [
  {
    body: "International Accreditation Council",
    status: "Accredited",
    programs: ["BS Computer Science", "BS Electrical Engineering"],
    validUntil: "2028",
  },
  {
    body: "National Accreditation Board",
    status: "Accredited",
    programs: ["BS Business Administration", "BS Economics"],
    validUntil: "2027",
  },
  {
    body: "Quality Assurance Agency",
    status: "In Progress",
    programs: ["MS Data Science", "MS Artificial Intelligence"],
    validUntil: "2026",
  },
  {
    body: "Professional Engineering Council",
    status: "Accredited",
    programs: ["BS Electrical Engineering", "BS Mechanical Engineering"],
    validUntil: "2029",
  },
]

const timeline = [
  { year: "2026", event: "Re-accreditation review for all programs" },
  { year: "2025", event: "International accreditation for Engineering programs" },
  { year: "2024", event: "National accreditation for Business programs" },
  { year: "2023", event: "Established Quality Enhancement Cell" },
]

export default function Accreditation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-foreground">Accreditation</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Our accreditations and recognition from national and international quality assurance bodies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {accreditations.map((item, i) => (
          <motion.div
            key={item.body}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{item.body}</h3>
                  <p className="text-xs text-muted">Valid until {item.validUntil}</p>
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  item.status === "Accredited"
                    ? "bg-accent/10 text-accent"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                }`}
              >
                {item.status === "Accredited" ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                {item.status}
              </span>
            </div>
            <div>
              <p className="text-xs text-muted mb-2">Accredited Programs:</p>
              <div className="flex flex-wrap gap-2">
                {item.programs.map((program) => (
                  <span
                    key={program}
                    className="px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-2 mb-8">
          <Clock className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Accreditation Timeline</h2>
        </div>
        <div className="space-y-0">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                {index < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
              </div>
              <div className="pb-8">
                <span className="text-sm font-bold text-primary">{item.year}</span>
                <p className="text-sm text-muted mt-1">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const articles = [
  {
    title: "Annual Quality Assurance Workshop 2026",
    date: "March 15, 2026",
    category: "Event",
    excerpt: "Join us for the annual QA workshop focusing on best practices in self-assessment and continuous improvement.",
  },
  {
    title: "New Accreditation Achieved for Engineering Programs",
    date: "February 28, 2026",
    category: "Announcement",
    excerpt: "Our engineering programs have successfully achieved international accreditation, a testament to our commitment to quality.",
  },
  {
    title: "Faculty Training Session on Assessment Techniques",
    date: "February 10, 2026",
    category: "Training",
    excerpt: "A professional development session on modern assessment techniques and rubrics design for faculty members.",
  },
  {
    title: "SAR Submission Deadline Extended",
    date: "January 25, 2026",
    category: "Notice",
    excerpt: "The deadline for Self-Assessment Report submissions has been extended to March 30, 2026.",
  },
  {
    title: "QEC Quarterly Review Meeting",
    date: "January 5, 2026",
    category: "Event",
    excerpt: "Quarterly review meeting to discuss progress on quality assurance initiatives and upcoming targets.",
  },
  {
    title: "Student Satisfaction Survey 2025 Results Published",
    date: "December 20, 2025",
    category: "Announcement",
    excerpt: "The results of the annual student satisfaction survey are now available for review and analysis.",
  },
]

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-foreground">News & Events</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Stay updated with the latest announcements, workshops, training sessions, and events.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  article.category === "Event"
                    ? "bg-accent/10 text-accent"
                    : article.category === "Announcement"
                      ? "bg-primary/10 text-primary"
                      : article.category === "Training"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
                        : "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
                }`}
              >
                {article.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-muted mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {article.date}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">{article.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

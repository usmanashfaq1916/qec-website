"use client"

import { motion } from "framer-motion"
import { FileText, FileSpreadsheet, BookOpen, ClipboardList, Download } from "lucide-react"

const categories = [
  {
    title: "Forms",
    icon: ClipboardList,
    files: [
      "Course Evaluation Form",
      "Faculty Performance Review Form",
      "Student Feedback Form",
      "Program Self-Assessment Form",
    ],
  },
  {
    title: "Manuals",
    icon: BookOpen,
    files: [
      "Quality Assurance Manual",
      "SAR Writing Guidelines",
      "Assessment Handbook",
      "Faculty Development Guide",
    ],
  },
  {
    title: "Templates",
    icon: FileText,
    files: [
      "SAR Template",
      "Course File Template",
      "Lesson Plan Template",
      "Annual Report Template",
    ],
  },
  {
    title: "Reports",
    icon: FileSpreadsheet,
    files: [
      "Annual Quality Report 2025",
      "Program Review Summary 2024",
      "Accreditation Status Report",
      "Student Satisfaction Survey Results",
    ],
  },
]

export default function Downloads() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-foreground">Downloads</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Access forms, manuals, templates, and reports essential for quality assurance processes.
        </p>
      </motion.div>

      <div className="space-y-10">
        {categories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <category.icon className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.files.map((file) => (
                <div
                  key={file}
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted" />
                    <span className="text-sm font-medium text-card-foreground">{file}</span>
                  </div>
                  <button className="flex items-center gap-1 text-xs text-primary hover:text-primary-light font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

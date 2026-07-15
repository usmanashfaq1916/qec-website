"use client"

import { motion } from "framer-motion"
import { FileText, Search, Filter } from "lucide-react"

const reports = [
  { program: "BS Computer Science", year: "2025", status: "Completed", type: "Self-Assessment Report" },
  { program: "BS Business Administration", year: "2025", status: "Completed", type: "Self-Assessment Report" },
  { program: "BS Electrical Engineering", year: "2024", status: "Completed", type: "Self-Assessment Report" },
  { program: "BS Mathematics", year: "2024", status: "Completed", type: "Self-Assessment Report" },
  { program: "MS Data Science", year: "2025", status: "In Progress", type: "Program Review" },
  { program: "PhD Economics", year: "2024", status: "Completed", type: "Program Review" },
]

export default function SelfAssessment() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-foreground">Self Assessment</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Self-Assessment Reports (SARs) and program review documentation for all academic programs.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 p-4 rounded-xl border border-border bg-card">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input
            type="text"
            placeholder="Search programs..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-border transition-colors w-full sm:w-auto">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="text-left px-6 py-4 font-semibold text-card-foreground">Program</th>
              <th className="text-left px-6 py-4 font-semibold text-card-foreground">Year</th>
              <th className="text-left px-6 py-4 font-semibold text-card-foreground">Type</th>
              <th className="text-left px-6 py-4 font-semibold text-card-foreground">Status</th>
              <th className="text-right px-6 py-4 font-semibold text-card-foreground">Report</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {reports.map((report, i) => (
              <motion.tr
                key={report.program}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-card/50 transition-colors"
              >
                <td className="px-6 py-4 text-card-foreground font-medium">{report.program}</td>
                <td className="px-6 py-4 text-muted">{report.year}</td>
                <td className="px-6 py-4 text-muted">{report.type}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      report.status === "Completed"
                        ? "bg-accent/10 text-accent"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="inline-flex items-center gap-1 text-primary hover:text-primary-light font-medium transition-colors text-xs">
                    <FileText className="h-3.5 w-3.5" />
                    Download
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

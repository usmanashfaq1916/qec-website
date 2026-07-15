"use client"

import { motion } from "framer-motion"
import { FileText, Shield, BookOpen, Scale, ClipboardCheck, GraduationCap } from "lucide-react"

const policies = [
  {
    icon: Shield,
    title: "Quality Assurance Policy",
    description: "Framework for maintaining and enhancing academic standards across all programs and departments.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Review Policy",
    description: "Guidelines for periodic review and revision of curricula to ensure relevance and modernity.",
  },
  {
    icon: Scale,
    title: "Assessment & Evaluation Policy",
    description: "Standards for fair, transparent, and reliable student assessment and program evaluation.",
  },
  {
    icon: ClipboardCheck,
    title: "Research Quality Policy",
    description: "Policies to promote high-quality research output and ethical research practices.",
  },
  {
    icon: GraduationCap,
    title: "Faculty Development Policy",
    description: "Programs and guidelines for continuous professional development of faculty members.",
  },
  {
    icon: FileText,
    title: "Documentation & Records Policy",
    description: "Standards for maintaining, storing, and retrieving quality-related documentation and records.",
  },
]

export default function QualityPolicies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-foreground">Quality Policies</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Our comprehensive quality assurance policies guide every aspect of academic and administrative operations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policies.map((policy, i) => (
          <motion.div
            key={policy.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <policy.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">{policy.title}</h3>
                <p className="text-sm text-muted">{policy.description}</p>
                <button className="mt-3 text-sm font-medium text-primary hover:text-primary-light transition-colors">
                  View Policy Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

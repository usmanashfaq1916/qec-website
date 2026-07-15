"use client"

import { motion } from "framer-motion"
import { Shield, Target, Eye, Users, Award, BookOpen, MapPin, Quote } from "lucide-react"
import Link from "next/link"

const achievements = [
  { value: "20+", label: "Years Experience" },
  { value: "5", label: "Campuses" },
  { value: "10,000+", label: "Students" },
  { value: "500+", label: "Faculty Members" },
  { value: "100+", label: "Achievements" },
]

const values = ["Excellence", "Transparency", "Innovation", "Accountability", "Integrity", "Inclusivity"]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">About Quaid Educational Complex</h1>
        <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
          A premier educational institution dedicated to building future leaders through quality education since 2002.
        </p>
      </motion.div>

      {/* History Section */}
      <motion.div
        id="history"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl border border-border bg-card mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Our History</h2>
        </div>
        <p className="text-muted leading-relaxed">
          Quaid Educational Complex (QEC) was established in 2002 with a vision to provide quality education
          to the youth of Lahore and beyond. Starting from a single campus, QEC has grown into a prestigious
          educational network with five campuses across Lahore, serving over 10,000 students. Our journey
          has been marked by a steadfast commitment to academic excellence, character building, and holistic
          student development.
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <div id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-border bg-card"
        >
          <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-accent-dark" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-3">Our Mission</h2>
          <p className="text-muted leading-relaxed">
            To provide accessible, affordable, and quality education that nurtures intellectual curiosity,
            develops character, and prepares students to become responsible citizens and leaders in their
            chosen fields.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-border bg-card"
        >
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-3">Our Vision</h2>
          <p className="text-muted leading-relaxed">
            To be a leading educational institution recognized nationally for academic excellence, innovative
            teaching methods, and producing graduates who make meaningful contributions to society.
          </p>
        </motion.div>
      </div>

      {/* Chairman Message */}
      <motion.div
        id="chairman"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl border border-border bg-card mb-10"
      >
        <div className="flex items-start gap-5">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
            <Quote className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">Chairman&apos;s Message</h2>
            <p className="text-sm text-muted mb-4">Chairman, Quaid Educational Complex</p>
            <p className="text-muted leading-relaxed">
              Welcome to Quaid Educational Complex. Our institution stands as a beacon of knowledge and
              character development. We believe that education is the most powerful tool for transforming
              lives and building a better society. Our dedicated team of educators works tirelessly to
              create an environment where every student can discover their potential, develop critical
              thinking skills, and grow into responsible global citizens. I invite you to explore our
              campuses and see the QEC difference for yourself.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Director Message */}
      <motion.div
        id="director"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl border border-border bg-card mb-10"
      >
        <div className="flex items-start gap-5">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center shrink-0">
            <Quote className="h-10 w-10 text-accent-dark" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">Director&apos;s Message</h2>
            <p className="text-sm text-muted mb-4">Director, Quaid Educational Complex</p>
            <p className="text-muted leading-relaxed">
              At QEC, we are committed to academic excellence and holistic student development. Our
              curriculum is designed to challenge students intellectually while our co-curricular programs
              nurture their talents and leadership abilities. We take pride in our experienced faculty,
              modern facilities, and the supportive learning environment we have created across all our
              campuses. Together, we are building the leaders of tomorrow.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <div id="achievements" className="mb-10">
        <div className="flex items-center gap-2 mb-8">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Our Achievements</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {achievements.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card text-center"
            >
              <div className="text-3xl font-bold text-primary">{item.value}</div>
              <div className="mt-1 text-sm text-muted">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-8">
          <Shield className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Core Values</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl border border-border bg-card text-center hover:border-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-card-foreground">{value}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">Visit Our Campuses</h2>
        <p className="text-muted mb-6">Experience the QEC difference firsthand</p>
        <Link
          href="/campuses"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all"
        >
          <MapPin className="h-4 w-4" /> Explore Campuses
        </Link>
      </div>
    </div>
  )
}

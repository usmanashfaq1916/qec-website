"use client"

import Link from "next/link"
import { ArrowRight, GraduationCap, MapPin, BookOpen, Users, Award, Trophy, School, MessageCircle, Download } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "5", label: "Campuses", icon: School },
  { value: "10,000+", label: "Students", icon: Users },
  { value: "500+", label: "Faculty Members", icon: GraduationCap },
  { value: "100+", label: "Achievements", icon: Trophy },
]

const campuses = [
  { name: "Chowk Begum Kot Campus", location: "Chowk Begum Kot, Lahore", slug: "/campuses/chowk-begum-kot" },
  { name: "Kot Shabudin Campus", location: "Shahdara, Lahore", slug: "/campuses/kot-shabudin" },
  { name: "Kot Abdul Malik Campus", location: "Kot Abdul Malik, Lahore", slug: "/campuses/kot-abdul-malik" },
  { name: "Al Rehman Garden Campus", location: "Al Rehman Garden, Lahore", slug: "/campuses/al-rehman-garden" },
  { name: "Quaid Lyceum Campus", location: "Lahore", slug: "/campuses/quaid-lyceum" },
]

function AnimatedCounter({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl border border-border bg-card text-center hover:border-accent/30 hover:shadow-lg transition-all group"
    >
      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-foreground">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-dark/20 to-accent/10" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, var(--color-accent) 0%, transparent 50%), radial-gradient(circle at 75% 50%, var(--color-primary) 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            >
              <GraduationCap className="h-4 w-4" />
              Established 2006
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Quaid Educational Complex
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Building Future Leaders Through Quality Education
            </p>
            <p className="mt-3 text-sm text-muted/70">
              Multiple Campuses | Experienced Faculty | Modern Learning Environment
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Apply Online
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/campuses"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all"
              >
                <MapPin className="h-4 w-4" />
                Explore Campuses
              </Link>
              <Link
                href="/admissions#prospectus"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-border transition-all"
              >
                <Download className="h-4 w-4" />
                Download Prospectus
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chairman & Director Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Leadership</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">Guiding QEC towards excellence in education</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-primary">CM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Chairman&apos;s Message</h3>
                <p className="text-sm text-muted mt-1">Chairman, Quaid Educational Complex</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">
                  At Quaid Educational Complex, we are committed to providing a transformative educational
                  experience that nurtures intellectual growth, character development, and leadership skills
                  in our students. Our vision is to create a learning environment where every student can thrive.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-accent-dark">DM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Director&apos;s Message</h3>
                <p className="text-sm text-muted mt-1">Director, Quaid Educational Complex</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">
                  Our dedicated faculty and staff work tirelessly to ensure that every student receives
                  personalized attention and guidance. We believe in fostering a culture of innovation,
                  critical thinking, and lifelong learning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Achievements</h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">A legacy of excellence in education</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Campuses</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">Five campuses across Lahore, each with its own unique learning environment</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campuses.map((campus, i) => (
            <motion.div
              key={campus.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-xl transition-all"
            >
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <School className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                {campus.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-2 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {campus.location}
              </div>
              <div className="mt-4 flex gap-3">
                <Link
                  href={campus.slug}
                  className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
                >
                  View Campus →
                </Link>
                <Link
                  href="/admissions"
                  className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
                >
                  Apply Now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Academics Preview */}
      <section className="bg-gradient-to-r from-primary/5 via-transparent to-accent/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Academic Programs</h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">Comprehensive education from school to professional level</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "School Programs", desc: "Matriculation and intermediate education with a focus on foundational excellence.", icon: BookOpen },
              { title: "College Programs", desc: "FSc, FA, ICS, and I.Com programs preparing students for higher education.", icon: GraduationCap },
              { title: "Professional Courses", desc: "Career-oriented programs designed to meet industry demands.", icon: Award },
            ].map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <prog.icon className="h-6 w-6 text-accent-dark" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{prog.title}</h3>
                <p className="text-sm text-muted">{prog.desc}</p>
                <Link href="/academics" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Start Your Journey</h2>
          <p className="text-muted mb-8">
            Join thousands of successful students at Quaid Educational Complex. Apply online today or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <ArrowRight className="h-4 w-4" />
              Apply Online
            </Link>
            <a
              href="https://wa.me/923XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-border transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

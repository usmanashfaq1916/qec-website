"use client"

import { motion } from "framer-motion"
import { Calendar, Image, Trophy, Music, Palette, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

const events = [
  { title: "Annual Sports Day 2026", date: "April 15, 2026", desc: "Inter-campus sports competitions including athletics, cricket, football, and badminton." },
  { title: "Parent Teacher Meeting", date: "March 25, 2026", desc: "Quarterly parent-teacher meeting to discuss student progress and development." },
  { title: "Spring Festival 2026", date: "March 10, 2026", desc: "Cultural festival featuring performances, competitions, and exhibitions." },
  { title: "Admissions Open Day", date: "February 20, 2026", desc: "Open house for prospective students and parents to tour our campuses." },
]

const activities = [
  { icon: Trophy, title: "Sports", desc: "Cricket, football, badminton, athletics and more" },
  { icon: Music, title: "Cultural Programs", desc: "Annual day, talent shows, music and drama" },
  { icon: Palette, title: "Art & Craft", desc: "Painting, calligraphy, photography exhibitions" },
  { icon: BookOpen, title: "Debates & Quizzes", desc: "Competitive debates, quiz competitions, and seminars" },
]

export default function StudentLifePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Student Life</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Life at QEC extends beyond the classroom. Discover a vibrant community of learning, creativity, and growth.
        </p>
      </motion.div>

      {/* Events */}
      <div id="events" className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{event.title}</h3>
                  <p className="text-xs text-accent font-medium mt-1">{event.date}</p>
                  <p className="text-sm text-muted mt-2">{event.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sports */}
      <div id="sports" className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          Sports & Activities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={act.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card text-center hover:border-accent/30 transition-all group"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <act.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">{act.title}</h3>
              <p className="text-sm text-muted">{act.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div id="activities" className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          Co-Curricular Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Debating Society", desc: "Develop public speaking and critical thinking through regular debates and competitions." },
            { title: "Science Club", desc: "Hands-on experiments, science fairs, and research projects." },
            { title: "Community Service", desc: "Volunteer programs, social awareness campaigns, and community outreach." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="font-bold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery CTA */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border text-center">
        <Image className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">View Our Gallery</h2>
        <p className="text-muted mb-6">Explore moments captured across our campuses</p>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all"
        >
          <Image className="h-4 w-4" />
          Visit Gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

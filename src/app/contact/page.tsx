"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError("")
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill all fields.")
      setSubmitting(false)
      return
    }
    setTimeout(() => {
      setSubmitted(true)
      setForm({ name: "", email: "", subject: "", message: "" })
      setSubmitting(false)
    }, 800)
  }

  function set(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to us — we&apos;re here to help.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {submitted ? (
            <div className="p-8 rounded-2xl border border-border bg-card text-center">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
              <p className="text-sm text-muted mt-2">We&apos;ll get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2 rounded-lg border border-border text-sm hover:bg-border transition-colors">
                Send Another
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">{error}</div>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input type="text" id="name" value={form.name} onChange={set("name")} required placeholder="Your name" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input type="email" id="email" value={form.email} onChange={set("email")} required placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                <input type="text" id="subject" value={form.subject} onChange={set("subject")} required placeholder="How can we help?" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                <textarea id="message" rows={5} value={form.message} onChange={set("message")} required placeholder="Write your message here..." className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              </div>
              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all disabled:opacity-50">
                <Send className="h-4 w-4" />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Address</h3>
                <p className="text-sm text-muted mt-1">
                  Quaid Educational Complex<br />
                  Chowk Begum Kot, Lahore<br />
                  Punjab, Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Phone</h3>
                <p className="text-sm text-muted mt-1">+92-XXX-XXXXXXX</p>
                <p className="text-sm text-muted">+92-XXX-XXXXXXX</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Email</h3>
                <p className="text-sm text-muted mt-1">info@qaeducomplex.edu.pk</p>
                <p className="text-sm text-muted">admissions@qaeducomplex.edu.pk</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Office Hours</h3>
                <p className="text-sm text-muted mt-1">Monday – Friday: 8:00 AM – 5:00 PM</p>
                <p className="text-sm text-muted">Saturday: 8:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/923XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-light transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}

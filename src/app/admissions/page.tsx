"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, ClipboardList, DollarSign, Download, CheckCircle, Clock, ArrowRight, Phone, Upload } from "lucide-react"

const steps = [
  { icon: ClipboardList, title: "Submit Application", desc: "Fill out the online admission form with required details" },
  { icon: CheckCircle, title: "Documents Verification", desc: "Our team verifies your submitted documents" },
  { icon: Clock, title: "Entrance Test/Interview", desc: "Appear for the entrance assessment" },
  { icon: FileText, title: "Merit List", desc: "Check your name on the merit list" },
  { icon: Download, title: "Fee Submission", desc: "Pay the admission fee to confirm your seat" },
  { icon: CheckCircle, title: "Admission Confirmed", desc: "Welcome to QEC! Begin your educational journey" },
]

const feeItems = [
  { label: "Admission Fee", amount: "Rs. 15,000" },
  { label: "Tuition Fee (Monthly)", amount: "Rs. 4,500 - 8,000" },
  { label: "Lab Fee (Annual)", amount: "Rs. 5,000" },
  { label: "Sports Fee (Annual)", amount: "Rs. 3,000" },
  { label: "Transport Fee (Monthly)", amount: "Rs. 3,000 - 5,000" },
]

const statusSteps = ["Submitted", "Documents Verified", "Approved", "Fee Pending", "Admission Confirmed"]

type FormData = {
  studentName: string; fatherName: string; cnicBform: string; dateOfBirth: string;
  gender: string; mobileNumber: string; email: string; address: string;
  previousSchool: string;
}

export default function AdmissionsPage() {
  const [form, setForm] = useState<FormData>({
    studentName: "", fatherName: "", cnicBform: "", dateOfBirth: "", gender: "",
    mobileNumber: "", email: "", address: "", previousSchool: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<{ applicationId: string } | null>(null)
  const [error, setError] = useState("")
  const [trackId, setTrackId] = useState("")
  const [trackResult, setTrackResult] = useState<{ status: string } | null>(null)
  const [tracking, setTracking] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError("")
    const id = `QEC-2026-${String(Math.floor(Math.random() * 9999)).padStart(4, "0")}`
    setTimeout(() => {
      setSubmitted({ applicationId: id })
      setSubmitting(false)
    }, 800)
  }

  function handleTrack() {
    if (!trackId.trim()) return
    setTracking(true)
    setTimeout(() => {
      setTrackResult({ status: "Submitted" })
      setTracking(false)
    }, 500)
  }

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Admissions</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">Begin your journey at Quaid Educational Complex. Apply online for the academic year 2026-2027.</p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
          <Clock className="h-4 w-4" />Admissions Open for 2026-2027
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
        <div className="lg:col-span-3">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-8 rounded-2xl border border-border bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <ClipboardList className="h-6 w-6 text-primary" />Online Admission Form
            </h2>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground">Application Submitted!</h3>
                <p className="text-lg font-mono text-primary mt-2">{submitted.applicationId}</p>
                <p className="text-sm text-muted mt-2">Save your Application ID to track progress</p>
                <button onClick={() => setSubmitted(null)} className="mt-6 px-6 py-2 rounded-lg border border-border text-sm hover:bg-border transition-colors">
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">{error}</div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Student Name *</label>
                    <input type="text" value={form.studentName} onChange={set("studentName")} required placeholder="Full name" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Father Name *</label>
                    <input type="text" value={form.fatherName} onChange={set("fatherName")} required placeholder="Father's full name" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">CNIC / B-Form *</label>
                    <input type="text" value={form.cnicBform} onChange={set("cnicBform")} required placeholder="XXXXX-XXXXXXX-X" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Date of Birth *</label>
                    <input type="date" value={form.dateOfBirth} onChange={set("dateOfBirth")} required className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Gender *</label>
                    <select value={form.gender} onChange={set("gender")} required className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Mobile Number *</label>
                    <input type="tel" value={form.mobileNumber} onChange={set("mobileNumber")} required placeholder="03XX-XXXXXXX" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Address *</label>
                  <textarea rows={2} value={form.address} onChange={set("address")} required placeholder="Complete residential address" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Previous School / Institute</label>
                  <input type="text" value={form.previousSchool} onChange={set("previousSchool")} placeholder="Name of previous school" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Upload Documents</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted mx-auto mb-2" />
                    <p className="text-sm text-muted">Drop files here or click to upload</p>
                    <p className="text-xs text-muted mt-1">CNIC/B-Form, Previous Results, Photographs</p>
                  </div>
                </div>
                <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all disabled:opacity-50">
                  {submitting ? "Submitting..." : "Submit Application"} {!submitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />Track Your Application
            </h3>
            <p className="text-sm text-muted mb-4">Enter your Application ID to check status</p>
            <div className="flex gap-2">
              <input type="text" value={trackId} onChange={(e) => setTrackId(e.target.value)} placeholder="QEC-2026-XXXX" className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <button onClick={handleTrack} disabled={tracking} className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors disabled:opacity-50">
                {tracking ? "..." : "Track"}
              </button>
            </div>
            {trackResult && (
              <div className="mt-4 space-y-2">
                {statusSteps.map((step, i) => {
                  const idx = statusSteps.indexOf(trackResult!.status)
                  const done = i <= idx
                  return (
                    <div key={step} className={`flex items-center gap-2 text-sm ${done ? "text-accent" : "text-muted"}`}>
                      <CheckCircle className="h-4 w-4" />{step}
                    </div>
                  )
                })}
              </div>
            )}
            {trackResult === null && trackId && !tracking && (
              <p className="text-sm text-red-500 mt-2">Application ID not found</p>
            )}
          </motion.div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-bold text-foreground mb-3">Need Help?</h3>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />+92-XXX-XXXXXXX</div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" />admissions@qaeducomplex.edu.pk</div>
            </div>
          </div>
        </div>
      </div>

      <div id="procedure" className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"><ClipboardList className="h-6 w-6 text-primary" />Admission Procedure</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><step.icon className="h-5 w-5 text-primary" /></div>
                <span className="text-sm font-bold text-primary">Step {i + 1}</span>
              </div>
              <h3 className="font-semibold text-card-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div id="fee" className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"><DollarSign className="h-6 w-6 text-primary" />Fee Structure</h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-6 py-4 font-semibold text-foreground">Fee Type</th><th className="text-right px-6 py-4 font-semibold text-foreground">Amount</th></tr></thead>
            <tbody className="divide-y divide-border">
              {feeItems.map((item) => (
                <tr key={item.label} className="hover:bg-card/50"><td className="px-6 py-4 text-card-foreground">{item.label}</td><td className="px-6 py-4 text-right font-medium text-card-foreground">{item.amount}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="prospectus" className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border text-center">
        <Download className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">Download Prospectus</h2>
        <p className="text-muted mb-6 max-w-xl mx-auto">Get detailed information about our programs, campuses, fee structure, and admission policies.</p>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all">
          <Download className="h-4 w-4" />Download Prospectus (PDF)
        </button>
      </div>
    </div>
  )
}

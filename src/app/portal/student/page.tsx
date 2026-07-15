"use client"

import { BookOpen, UserCheck, DollarSign, Bell, Calendar, Award, Clock } from "lucide-react"

const courses = [
  { code: "MTH-101", name: "Mathematics", teacher: "Dr. Ahmed", schedule: "Mon/Wed 9:00-10:30" },
  { code: "PHY-101", name: "Physics", teacher: "Prof. Khan", schedule: "Tue/Thu 9:00-10:30" },
  { code: "ENG-101", name: "English", teacher: "Ms. Fatima", schedule: "Mon/Wed 11:00-12:30" },
  { code: "CHM-101", name: "Chemistry", teacher: "Dr. Ali", schedule: "Tue/Thu 11:00-12:30" },
]

const attendance = [
  { subject: "Mathematics", present: 22, total: 25 },
  { subject: "Physics", present: 20, total: 25 },
  { subject: "English", present: 24, total: 25 },
  { subject: "Chemistry", present: 19, total: 25 },
]

const notices = [
  { title: "Mid-term exams schedule", date: "Jul 20, 2026" },
  { title: "Science fair registration", date: "Jul 18, 2026" },
  { title: "Parent-teacher meeting", date: "Jul 25, 2026" },
]

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Student Dashboard</h1>
        <p className="text-sm text-muted mt-1">Welcome back! Here&apos;s your academic overview.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><BookOpen className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold text-foreground">4</p><p className="text-xs text-muted">Enrolled Courses</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center"><UserCheck className="h-5 w-5 text-accent" /></div>
            <div><p className="text-2xl font-bold text-foreground">85%</p><p className="text-xs text-muted">Attendance</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center"><DollarSign className="h-5 w-5 text-yellow-500" /></div>
            <div><p className="text-2xl font-bold text-foreground">Rs. 4,500</p><p className="text-xs text-muted">Monthly Fee</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center"><Award className="h-5 w-5 text-blue-500" /></div>
            <div><p className="text-2xl font-bold text-foreground">3.6</p><p className="text-xs text-muted">Current GPA</p></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" />My Courses</h2>
          <div className="space-y-3">
            {courses.map((c) => (
              <div key={c.code} className="p-3 rounded-lg border border-border bg-background">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-foreground">{c.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{c.code}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{c.schedule}</span>
                  <span>{c.teacher}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><UserCheck className="h-5 w-5 text-accent" />Attendance</h2>
            <div className="space-y-3">
              {attendance.map((a) => (
                <div key={a.subject}>
                  <div className="flex justify-between text-sm mb-1"><span className="text-card-foreground">{a.subject}</span><span className="text-muted">{a.present}/{a.total}</span></div>
                  <div className="h-2 rounded-full bg-border overflow-hidden">
                    <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${(a.present / a.total) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><Bell className="h-5 w-5 text-primary" />Recent Notices</h2>
            <div className="space-y-3">
              {notices.map((n) => (
                <div key={n.title} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-card-foreground">{n.title}</span>
                  <span className="text-xs text-muted">{n.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl border border-border bg-card">
        <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" />Today&apos;s Timetable</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {courses.map((c) => (
            <div key={c.code} className="p-4 rounded-lg border border-border bg-background text-center">
              <p className="text-xs text-muted">{c.schedule.split(" ")[0]}</p>
              <p className="text-sm font-semibold text-foreground mt-1">{c.name}</p>
              <p className="text-xs text-muted mt-1">{c.schedule.split(" ").slice(1).join(" ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

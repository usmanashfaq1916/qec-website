"use client"

import { School, Users, ClipboardList, Clock, BookOpen, UserCheck, Calendar } from "lucide-react"

const classes = [
  { name: "Mathematics 10A", students: 35, room: "Room 201", schedule: "Mon/Wed 8:00-9:30" },
  { name: "Mathematics 10B", students: 32, room: "Room 202", schedule: "Tue/Thu 8:00-9:30" },
  { name: "Mathematics 9A", students: 38, room: "Room 101", schedule: "Mon/Wed 10:00-11:30" },
  { name: "Mathematics 9B", students: 36, room: "Room 102", schedule: "Tue/Thu 10:00-11:30" },
]

const recentAttendance = [
  { class: "Mathematics 10A", date: "Jul 14, 2026", present: 32, total: 35 },
  { class: "Mathematics 10B", date: "Jul 14, 2026", present: 30, total: 32 },
  { class: "Mathematics 9A", date: "Jul 14, 2026", present: 36, total: 38 },
]

export default function TeacherDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Teacher Dashboard</h1>
        <p className="text-sm text-muted mt-1">Manage your classes, students, and attendance.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><School className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold text-foreground">4</p><p className="text-xs text-muted">Active Classes</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center"><Users className="h-5 w-5 text-accent" /></div>
            <div><p className="text-2xl font-bold text-foreground">141</p><p className="text-xs text-muted">Total Students</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center"><BookOpen className="h-5 w-5 text-yellow-500" /></div>
            <div><p className="text-2xl font-bold text-foreground">18</p><p className="text-xs text-muted">Weekly Hours</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center"><UserCheck className="h-5 w-5 text-blue-500" /></div>
            <div><p className="text-2xl font-bold text-foreground">87%</p><p className="text-xs text-muted">Avg Attendance</p></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><School className="h-5 w-5 text-primary" />My Classes</h2>
          <div className="space-y-3">
            {classes.map((c) => (
              <div key={c.name} className="p-4 rounded-lg border border-border bg-background">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-foreground">{c.name}</span>
                  <span className="text-xs text-muted">{c.students} students</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{c.schedule}</span>
                  <span>{c.room}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><ClipboardList className="h-5 w-5 text-accent" />Recent Attendance</h2>
            <div className="space-y-3">
              {recentAttendance.map((a) => (
                <div key={a.class} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div><p className="text-sm text-card-foreground">{a.class}</p><p className="text-xs text-muted">{a.date}</p></div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-accent">{a.present}/{a.total}</p>
                    <p className="text-xs text-muted">{Math.round((a.present / a.total) * 100)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" />Today&apos;s Schedule</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                <span className="text-sm text-card-foreground">Mathematics 10A</span>
                <span className="text-xs text-muted">8:00 - 9:30</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                <span className="text-sm text-card-foreground">Mathematics 9A</span>
                <span className="text-xs text-muted">10:00 - 11:30</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                <span className="text-sm text-card-foreground">Staff Meeting</span>
                <span className="text-xs text-muted">14:00 - 15:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

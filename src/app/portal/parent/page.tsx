"use client"

import { UserCheck, DollarSign, Bell, TrendingUp, Award, User, GraduationCap } from "lucide-react"

const students = [
  { name: "Ahmed Khan", class: "10th Grade", section: "A", rollNo: "1001", attendance: 92, gpa: 3.8 },
  { name: "Sara Khan", class: "8th Grade", section: "B", rollNo: "2003", attendance: 95, gpa: 3.9 },
]

const feeStatus = [
  { month: "Jul 2026", amount: "Rs. 4,500", status: "Paid" },
  { month: "Jun 2026", amount: "Rs. 4,500", status: "Paid" },
  { month: "May 2026", amount: "Rs. 4,500", status: "Paid" },
]

const notices = [
  { title: "Parent-teacher meeting", date: "Jul 25, 2026" },
  { title: "Summer camp registration", date: "Jul 22, 2026" },
  { title: "Annual sports gala", date: "Aug 5, 2026" },
]

export default function ParentDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Parent Dashboard</h1>
        <p className="text-sm text-muted mt-1">Track your children&apos;s academic progress.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><GraduationCap className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold text-foreground">2</p><p className="text-xs text-muted">Children Enrolled</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center"><Award className="h-5 w-5 text-accent" /></div>
            <div><p className="text-2xl font-bold text-foreground">3.85</p><p className="text-xs text-muted">Avg. GPA</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center"><UserCheck className="h-5 w-5 text-yellow-500" /></div>
            <div><p className="text-2xl font-bold text-foreground">93%</p><p className="text-xs text-muted">Avg. Attendance</p></div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center"><DollarSign className="h-5 w-5 text-blue-500" /></div>
            <div><p className="text-2xl font-bold text-foreground">Clear</p><p className="text-xs text-muted">Fee Status</p></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {students.map((s) => (
            <div key={s.rollNo} className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"><User className="h-6 w-6 text-primary" /></div>
                <div><h3 className="font-bold text-foreground">{s.name}</h3><p className="text-xs text-muted">{s.class} - Section {s.section} (Roll No: {s.rollNo})</p></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-background border border-border">
                  <p className="text-lg font-bold text-accent">{s.attendance}%</p>
                  <p className="text-xs text-muted">Attendance</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background border border-border">
                  <p className="text-lg font-bold text-primary">{s.gpa}</p>
                  <p className="text-xs text-muted">GPA</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background border border-border">
                  <p className="text-lg font-bold text-yellow-500">{s.attendance}</p>
                  <p className="text-xs text-muted">Rank</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><DollarSign className="h-5 w-5 text-primary" />Fee History</h2>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border"><th className="text-left py-2 text-muted font-medium">Month</th><th className="text-left py-2 text-muted font-medium">Amount</th><th className="text-right py-2 text-muted font-medium">Status</th></tr></thead>
              <tbody className="divide-y divide-border">
                {feeStatus.map((f) => (
                  <tr key={f.month}><td className="py-2.5 text-card-foreground">{f.month}</td><td className="py-2.5 text-card-foreground">{f.amount}</td><td className="py-2.5 text-right"><span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{f.status}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><Bell className="h-5 w-5 text-primary" />Notices</h2>
            <div className="space-y-3">
              {notices.map((n) => (
                <div key={n.title} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-card-foreground">{n.title}</span>
                  <span className="text-xs text-muted">{n.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-accent" />Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">Download Reports</button>
              <button className="p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">Contact Teacher</button>
              <button className="p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">Pay Fee Online</button>
              <button className="p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">Apply for Leave</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

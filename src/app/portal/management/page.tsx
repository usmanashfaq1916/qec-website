"use client"

import { Users, GraduationCap, ClipboardList, TrendingUp, Building2, CreditCard, School, ArrowUp } from "lucide-react"

const stats = [
  { label: "Total Students", value: "1,247", change: "+12%", icon: Users, color: "text-primary" },
  { label: "Teachers", value: "86", change: "+5%", icon: GraduationCap, color: "text-accent" },
  { label: "Campuses", value: "5", change: "0%", icon: Building2, color: "text-blue-500" },
  { label: "Admissions", value: "342", change: "+18%", icon: ClipboardList, color: "text-yellow-500" },
  { label: "Programs", value: "24", change: "+2", icon: School, color: "text-purple-500" },
  { label: "Revenue", value: "Rs. 2.4M", change: "+8%", icon: TrendingUp, color: "text-green-500" },
]

const recentAdmissions = [
  { id: "QEC-2026-0001", name: "Ali Hassan", program: "FSc Pre-Medical", date: "Jul 15, 2026", status: "Approved" },
  { id: "QEC-2026-0002", name: "Fatima Ahmed", program: "ICS", date: "Jul 14, 2026", status: "Documents Verified" },
  { id: "QEC-2026-0003", name: "Usman Khan", program: "FSc Pre-Engineering", date: "Jul 14, 2026", status: "Submitted" },
  { id: "QEC-2026-0004", name: "Ayesha Malik", program: "BA", date: "Jul 13, 2026", status: "Approved" },
  { id: "QEC-2026-0005", name: "Bilal Ahmad", program: "FSc Pre-Medical", date: "Jul 13, 2026", status: "Fee Pending" },
]

export default function ManagementDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Management Dashboard</h1>
        <p className="text-sm text-muted mt-1">Institutional overview and key metrics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="p-5 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between mb-3">
              <div className={`h-10 w-10 rounded-lg bg-background border border-border flex items-center justify-center ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <span className="flex items-center gap-0.5 text-xs font-medium text-accent">
                <ArrowUp className="h-3 w-3" />{s.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-xl border border-border bg-card">
          <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><ClipboardList className="h-5 w-5 text-primary" />Recent Admissions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4 text-muted font-medium">App ID</th><th className="text-left py-2 pr-4 text-muted font-medium">Name</th><th className="text-left py-2 pr-4 text-muted font-medium">Program</th><th className="text-left py-2 pr-4 text-muted font-medium">Date</th><th className="text-right py-2 text-muted font-medium">Status</th></tr></thead>
              <tbody className="divide-y divide-border">
                {recentAdmissions.map((a) => (
                  <tr key={a.id}>
                    <td className="py-3 pr-4 font-mono text-xs text-card-foreground">{a.id}</td>
                    <td className="py-3 pr-4 font-medium text-card-foreground">{a.name}</td>
                    <td className="py-3 pr-4 text-muted">{a.program}</td>
                    <td className="py-3 pr-4 text-muted">{a.date}</td>
                    <td className="py-3 text-right">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        a.status === "Approved" ? "bg-accent/10 text-accent" :
                        a.status === "Fee Pending" ? "bg-yellow-500/10 text-yellow-500" :
                        a.status === "Documents Verified" ? "bg-blue-500/10 text-blue-500" :
                        "bg-muted/10 text-muted"
                      }`}>{a.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2"><Users className="h-5 w-5 text-accent" />Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">Add New Student</button>
              <button className="w-full text-left p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">Generate Reports</button>
              <button className="w-full text-left p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">Manage Staff</button>
              <button className="w-full text-left p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">View Analytics</button>
              <button className="w-full text-left p-3 rounded-lg border border-border bg-background text-sm font-medium text-card-foreground hover:bg-border transition-colors">Fee Management</button>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-bold text-foreground mb-3 flex items-center gap-2"><School className="h-5 w-5 text-primary" />Campus Distribution</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm"><span className="text-card-foreground">Chowk Begum Kot</span><span className="text-muted">420 students</span></div>
              <div className="flex justify-between text-sm"><span className="text-card-foreground">Kot Shabudin</span><span className="text-muted">280 students</span></div>
              <div className="flex justify-between text-sm"><span className="text-card-foreground">Kot Abdul Malik</span><span className="text-muted">195 students</span></div>
              <div className="flex justify-between text-sm"><span className="text-card-foreground">Al Rehman Garden</span><span className="text-muted">225 students</span></div>
              <div className="flex justify-between text-sm"><span className="text-card-foreground">Quaid Lyceum</span><span className="text-muted">127 students</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

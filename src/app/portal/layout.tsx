"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard, BookOpen, Calendar, Users, CreditCard, Bell,
  GraduationCap, ClipboardList, BarChart3, Settings, LogOut,
  UserCheck, Clock, FileText, DollarSign, TrendingUp, MessageSquare,
  School, Award, BookMarked
} from "lucide-react"

const roleNav: Record<string, { label: string; href: string; icon: React.ElementType }[]> = {
  STUDENT: [
    { label: "Dashboard", href: "/portal/student", icon: LayoutDashboard },
    { label: "My Courses", href: "/portal/student/courses", icon: BookOpen },
    { label: "Attendance", href: "/portal/student/attendance", icon: UserCheck },
    { label: "Timetable", href: "/portal/student/timetable", icon: Calendar },
    { label: "Marks & Results", href: "/portal/student/results", icon: Award },
    { label: "Fee Details", href: "/portal/student/fees", icon: DollarSign },
    { label: "Notices", href: "/portal/student/notices", icon: Bell },
  ],
  PARENT: [
    { label: "Dashboard", href: "/portal/parent", icon: LayoutDashboard },
    { label: "Attendance", href: "/portal/parent/attendance", icon: UserCheck },
    { label: "Progress Report", href: "/portal/parent/reports", icon: TrendingUp },
    { label: "Fee Details", href: "/portal/parent/fees", icon: DollarSign },
    { label: "Communication", href: "/portal/parent/communication", icon: MessageSquare },
    { label: "Notices", href: "/portal/parent/notices", icon: Bell },
  ],
  TEACHER: [
    { label: "Dashboard", href: "/portal/teacher", icon: LayoutDashboard },
    { label: "My Classes", href: "/portal/teacher/classes", icon: School },
    { label: "Students", href: "/portal/teacher/students", icon: Users },
    { label: "Attendance", href: "/portal/teacher/attendance", icon: ClipboardList },
    { label: "Marks Entry", href: "/portal/teacher/marks", icon: FileText },
    { label: "Timetable", href: "/portal/teacher/timetable", icon: Calendar },
    { label: "Notices", href: "/portal/teacher/notices", icon: Bell },
  ],
  ADMIN: [
    { label: "Dashboard", href: "/portal/management", icon: LayoutDashboard },
    { label: "Students", href: "/portal/management/students", icon: Users },
    { label: "Teachers", href: "/portal/management/teachers", icon: GraduationCap },
    { label: "Admissions", href: "/portal/management/admissions", icon: ClipboardList },
    { label: "Classes", href: "/portal/management/classes", icon: School },
    { label: "Reports", href: "/portal/management/reports", icon: BarChart3 },
    { label: "Settings", href: "/portal/management/settings", icon: Settings },
  ],
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { data: session } = useSession()
  const role = (session?.user?.role as string) ?? "STUDENT"
  const navItems = roleNav[role] ?? roleNav.STUDENT

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-card p-4 gap-1">
        <div className="px-3 py-3 mb-2">
          <p className="text-sm font-semibold text-foreground">{session?.user?.name ?? "User"}</p>
          <p className="text-xs text-muted capitalize">{role.toLowerCase()} Portal</p>
        </div>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href
                ? "text-primary bg-primary/10"
                : "text-muted hover:text-foreground hover:bg-border"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
        <div className="mt-auto pt-4 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-border transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Back to Website
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}

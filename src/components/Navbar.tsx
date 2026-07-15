"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Menu, X, GraduationCap, ChevronDown, LogIn, LogOut, LayoutDashboard } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ThemeToggle"

const navItems: {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "History", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "Chairman Message", href: "/about#chairman" },
      { label: "Director Message", href: "/about#director" },
      { label: "Achievements", href: "/about#achievements" },
    ],
  },
  {
    label: "Campuses",
    children: [
      { label: "Chowk Begum Kot", href: "/campuses/chowk-begum-kot" },
      { label: "Kot Shabudin Shahdara", href: "/campuses/kot-shabudin" },
      { label: "Kot Abdul Malik", href: "/campuses/kot-abdul-malik" },
      { label: "Al Rehman Garden", href: "/campuses/al-rehman-garden" },
      { label: "Quaid Lyceum", href: "/campuses/quaid-lyceum" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Programs", href: "/academics#programs" },
      { label: "Departments", href: "/academics#departments" },
      { label: "Faculty", href: "/academics#faculty" },
      { label: "Academic Calendar", href: "/academics#calendar" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Apply Online", href: "/admissions" },
      { label: "Admission Procedure", href: "/admissions#procedure" },
      { label: "Fee Structure", href: "/admissions#fee" },
      { label: "Prospectus", href: "/admissions#prospectus" },
    ],
  },
  {
    label: "Student Life",
    children: [
      { label: "Events", href: "/student-life#events" },
      { label: "Gallery", href: "/gallery" },
      { label: "Sports", href: "/student-life#sports" },
      { label: "Activities", href: "/student-life#activities" },
    ],
  },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
]

function Dropdown({ item, pathname }: { item: typeof navItems[number]; pathname: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const childActive = item.children?.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"))

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          childActive
            ? "text-primary bg-primary/10"
            : "text-muted hover:text-foreground hover:bg-border"
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-border bg-card shadow-lg p-1.5 z-50">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-lg text-sm transition-colors",
                pathname === child.href
                  ? "text-primary bg-primary/10 font-medium"
                  : "text-muted hover:text-foreground hover:bg-border"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const role = session?.user?.role as string | undefined
  const portalHref = role ? `/portal/${role === "ADMIN" ? "management" : role.toLowerCase()}` : undefined
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <GraduationCap className="h-7 w-7" />
            <span className="hidden sm:inline">Quaid Educational Complex</span>
            <span className="sm:hidden">QEC</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <Dropdown key={item.label} item={item} pathname={pathname} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-foreground hover:bg-border"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            {session ? (
              <>
                <Link
                  href={portalHref!}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname.startsWith("/portal")
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-foreground hover:bg-border"
                  )}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Portal
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted hover:text-foreground hover:bg-border transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted hover:text-foreground hover:bg-border transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            )}
            <div className="ml-2 pl-2 border-l border-border flex items-center gap-1">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-border transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-muted hover:text-foreground hover:bg-border transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", mobileDropdown === item.label && "rotate-180")} />
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="ml-4 mt-1 space-y-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMobileOpen(false); setMobileDropdown(null) }}
                          className={cn(
                            "block px-3 py-2 rounded-md text-sm transition-colors",
                            pathname === child.href
                              ? "text-primary bg-primary/10 font-medium"
                              : "text-muted hover:text-foreground hover:bg-border"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-foreground hover:bg-border"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <hr className="border-border my-2" />
            {session ? (
              <>
                <Link
                  href={portalHref!}
                  onClick={() => { setMobileOpen(false); setMobileDropdown(null) }}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted hover:text-foreground hover:bg-border transition-colors"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Portal
                </Link>
                <button
                  onClick={() => { signOut(); setMobileOpen(false) }}
                  className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm font-medium text-muted hover:text-foreground hover:bg-border transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => { setMobileOpen(false); setMobileDropdown(null) }}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted hover:text-foreground hover:bg-border transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

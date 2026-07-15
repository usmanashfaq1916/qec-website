import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { SessionProvider } from "@/components/SessionProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Quaid Educational Complex | Best Educational Institute Lahore",
    template: "%s | Quaid Educational Complex",
  },
  description:
    "Quaid Educational Complex (QEC) — Building Future Leaders Through Quality Education. Multiple Campuses | Experienced Faculty | Modern Learning Environment.",
  openGraph: {
    title: "Quaid Educational Complex | Best Educational Institute Lahore",
    description: "Building Future Leaders Through Quality Education. Multiple Campuses across Lahore.",
    type: "website",
    locale: "en_PK",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <ThemeProvider>
          <SessionProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

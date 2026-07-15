import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-lg">
              <GraduationCap className="h-6 w-6" />
              <span>QEC</span>
            </Link>
            <p className="text-sm text-muted">
              Quaid Educational Complex — Building Future Leaders Through Quality Education.
            </p>
            <a
              href="https://wa.me/923244776493"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-primary transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link href="/campuses" className="hover:text-primary transition-colors">Campuses</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">More</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/news" className="hover:text-primary transition-colors">News & Events</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/student-life" className="hover:text-primary transition-colors">Student Life</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Chowk Begum Kot, Lahore, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+92-XXX-XXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@qaeducomplex.edu.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Quaid Educational Complex. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

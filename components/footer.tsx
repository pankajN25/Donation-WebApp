import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-card to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-primary-purple flex items-center justify-center">
                <span className="text-white font-bold">♥</span>
              </div>
              <h3 className="font-bold text-lg text-foreground">Cancer Awareness</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fighting cancer through awareness, support, and hope. Early detection saves lives, and together we make a
              difference.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base">Contact & Donate</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Email:{" "}
              <a href="mailto:info@cancersupport.org" className="text-primary hover:underline font-medium">
                info@cancersupport.org
              </a>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Phone:{" "}
              <a href="tel:1-800-227-2345" className="text-primary hover:underline font-medium">
                1-800-227-2345
              </a>
            </p>
            <a
              href="#donate"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@cancersupport.org"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-center sm:text-right text-sm text-muted-foreground">
              &copy; 2025 Cancer Awareness & Support Platform. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

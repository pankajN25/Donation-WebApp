"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Heart } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 rounded-lg gradient-primary-purple flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">♥</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">Cancer Awareness</h1>
            <p className="text-xs text-muted-foreground">& Support Platform</p>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/"
            className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium hover:bg-primary/5"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium hover:bg-primary/5"
          >
            About
          </Link>
          <Link
            href="/resources"
            className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium hover:bg-primary/5"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium hover:bg-primary/5"
          >
            Contact
          </Link>
          <Link
            href="/donate"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all font-semibold ml-4 flex items-center gap-2"
          >
            <Heart size={18} />
            Donate
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-fade-in">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/resources"
              className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/donate"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors font-semibold inline-flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart size={18} />
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

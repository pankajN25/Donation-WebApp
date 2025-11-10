"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Stethoscope, ChevronRight } from "lucide-react"

interface Quote {
  _id: string
  content: string
  author: string
}

export default function Home() {
  const [quote, setQuote] = useState<{
    _id: string;
    content: string;
    author: string;
  } | null>(null);
  const [isLoadingQuote, setIsLoadingQuote] = useState(true);


  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async (forceNew = false) => {
    setIsLoadingQuote(true);

    try {
      // For "daily" quotes: Check localStorage for today's quote
      const today = new Date().toDateString();
      const cachedQuote = localStorage.getItem('dailyQuote');
      const cachedDate = localStorage.getItem('quoteDate');

      if (!forceNew && cachedQuote && cachedDate === today) {
        // Use cached quote if it's from today and not forcing a new one
        setQuote(JSON.parse(cachedQuote));
        setIsLoadingQuote(false);
        return;
      }

      // Fetch from API
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote from API');
      }

      const data = await response.json();
      const newQuote = {
        _id: data._id,
        content: data.content,
        author: data.author,
      };

      setQuote(newQuote);

      // Cache the quote for the day
      localStorage.setItem('dailyQuote', JSON.stringify(newQuote));
      localStorage.setItem('quoteDate', today);
    } catch (error) {
      console.error('Error fetching quote:', error);
      // Fallback quote on error
      setQuote({
        _id: 'fallback',
        content: 'Stay strong — you are not alone. Together we fight cancer.',
        author: 'Cancer Awareness & Support',
      });
    } finally {
      setIsLoadingQuote(false);
    }
  };

  // Fetch quote on component mount (loads daily quote)
  useEffect(() => {
    fetchQuote();  // Loads cached or fetches new
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-subtle pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div className="space-y-4">
                  <div className="inline-block gradient-primary-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ✨ Comprehensive Cancer Support
                  </div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance text-foreground leading-tight">
                    Together We Fight Cancer
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground text-balance max-w-lg leading-relaxed">
                  Early detection saves lives. Get evidence-based information, emotional support, and treatment guidance
                  from healthcare professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/resources"
                    className="gradient-primary-purple text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all font-semibold flex items-center justify-center gap-2 text-lg"
                  >
                    Explore Resources <ChevronRight size={20} />
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-all font-semibold text-lg"
                  >
                    Get Support Now
                  </Link>
                </div>
              </div>

              <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden animate-slide-in-right shadow-2xl">
                <img
                  src="/healthcare-professionals-cancer-awareness-support.jpg"
                  alt="Healthcare professionals providing cancer awareness support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-subtle border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-4 stagger">
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Every 15 Seconds</p>
                <p className="text-3xl font-bold text-primary mt-2">1 in 3</p>
                <p className="text-muted-foreground mt-2">people diagnosed with cancer in their lifetime</p>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all">
                <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Early Detection</p>
                <p className="text-3xl font-bold text-secondary mt-2">40%+</p>
                <p className="text-muted-foreground mt-2">survival rate increase with early screening</p>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">
                  Support Available
                </p>
                <p className="text-3xl font-bold text-primary mt-2">24/7</p>
                <p className="text-muted-foreground mt-2">professional counseling and resources</p>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all">
                <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Community</p>
                <p className="text-3xl font-bold text-secondary mt-2">100K+</p>
                <p className="text-muted-foreground mt-2">survivors and supporters connected</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">How We Support You</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive resources and support across every stage of your cancer journey
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 stagger">
              {/* Awareness Card */}
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 mb-6 transition-all">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Prevention & Awareness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn about cancer risk factors, prevention strategies, and the importance of regular screenings for
                  early detection.
                </p>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>

              {/* Emotional Support Card */}
              <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 group-hover:from-secondary/20 group-hover:to-secondary/10 mb-6 transition-all">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Emotional Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with support groups, certified counselors, and communities of fighters and survivors who
                  understand your journey.
                </p>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 mt-6 text-secondary font-semibold hover:gap-3 transition-all"
                >
                  Join Community <ChevronRight size={16} />
                </Link>
              </div>

              {/* Treatment Navigation Card */}
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 mb-6 transition-all">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Treatment Navigation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guidance through treatment options, find specialized oncologists, and access comprehensive healthcare
                  resources.
                </p>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Find Resources <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 gradient-subtle border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-4xl font-bold text-foreground">Today's Inspirational Quote</h2>
            <p className="text-muted-foreground">Words of hope and strength from our community</p>
          </div>

          <div className="bg-background p-10 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all shadow-xl animate-scale-in">
            <blockquote className="text-center space-y-6">
              {isLoadingQuote ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <>
                  <p className="text-2xl sm:text-3xl font-semibold italic text-foreground text-balance leading-relaxed">
                    "{quote?.content || "Stay strong — you are not alone. Together we fight cancer."}"
                  </p>
                  <footer className="text-lg text-muted-foreground font-medium">
                    — {quote?.author || "Cancer Awareness & Support"}
                  </footer>
                </>
              )}
            </blockquote>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => fetchQuote(true)}  // Force a new random quote
                disabled={isLoadingQuote}
                className="gradient-primary-purple text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingQuote ? "Loading..." : "New Quote"}
              </button>
            </div>
          </div>
        </div>
      </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Start Your Journey Today</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're seeking information, emotional support, or treatment guidance, our team of professionals is
              here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className="gradient-purple-blue text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all font-semibold text-lg"
              >
                Explore Resources
              </Link>
              <Link
                href="/about"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-all font-semibold text-lg"
              >
                Learn Our Story
              </Link>
              <Link
                href="/contact"
                className="bg-muted text-foreground px-8 py-4 rounded-lg hover:bg-muted/80 transition-all font-semibold text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

"use client"

import { Heart, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">Make a Difference</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Your Donation Saves Lives
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Every contribution helps us provide essential cancer awareness, research support, and patient care services.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, amount: "$25", impact: "Supports 5 patients with counseling" },
              { icon: Heart, amount: "$50", impact: "Funds research initiatives" },
              { icon: TrendingUp, amount: "$100", impact: "Provides awareness programs" },
              { icon: Award, amount: "$250+", impact: "Premium support services" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <p className="text-2xl font-bold text-foreground mb-2">{item.amount}</p>
                <p className="text-sm text-muted-foreground">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Donation</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "One-Time Donation", description: "Make an immediate impact" },
              { label: "Monthly Support", description: "Sustain our mission year-round" },
              { label: "Corporate Partnership", description: "Enterprise-level support" },
            ].map((option, index) => (
              <button
                key={index}
                className="p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all text-left group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {option.label}
                </h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Make Your Donation</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your surname"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Donation Amount (USD)</label>
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {["25", "50", "100", "250"].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="py-2 px-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Custom amount"
                />
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="monthly" className="w-4 h-4 rounded" />
                <label htmlFor="monthly" className="text-sm text-muted-foreground">
                  Make this a monthly recurring donation
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Donate Now
              </button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Your donation is secure and encrypted. We never share your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is my donation tax-deductible?",
                a: "Yes, we are a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible.",
              },
              {
                q: "How can I cancel my monthly donation?",
                a: "You can cancel anytime by visiting your account settings or contacting our support team.",
              },
              {
                q: "What if I want to donate in memory of someone?",
                a: "We offer memorial donations. Please mention this in your donation form and our team will contact you.",
              },
              {
                q: "Can I donate through my employer?",
                a: "Yes! Many employers match employee donations. Check with your HR department for details.",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-purple-600 to-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Not ready to donate?</h2>
          <p className="text-lg text-white/90 mb-8">
            You can still help by sharing our mission with friends and family.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  )
}

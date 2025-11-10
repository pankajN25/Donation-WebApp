import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Users, Phone, FileText } from "lucide-react"

export default function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Educational Materials",
      description: "Comprehensive guides about cancer types, prevention, and early detection.",
      items: [
        "Cancer Prevention Guide",
        "Understanding Your Diagnosis",
        "Treatment Options Explained",
        "Lifestyle & Wellness",
      ],
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Connect with others who understand your experience.",
      items: ["Patient Support Groups", "Survivor Communities", "Caregiver Support", "Family Resources"],
    },
    {
      icon: Phone,
      title: "Helplines & Hotlines",
      description: "Talk to trained counselors and healthcare professionals.",
      items: ["24/7 Support Hotline", "Mental Health Services", "Nutrition Counseling", "Financial Assistance Info"],
    },
    {
      icon: FileText,
      title: "Medical Resources",
      description: "Find specialists, clinical trials, and treatment centers.",
      items: ["Find a Specialist", "Clinical Trials Directory", "Hospital Finder", "Insurance & Cost Help"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and support to guide you through every step of your cancer journey.
            </p>
          </div>
        </section>

        {/* Resource Cards Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {resources.map((resource, index) => {
                const Icon = resource.icon
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{resource.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6">{resource.description}</p>

                    <ul className="space-y-3">
                      {resource.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Immediate Support?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't hesitate to reach out. Our team is ready to help you find the resources you need.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-[#c01f1f] transition-colors font-semibold text-lg"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

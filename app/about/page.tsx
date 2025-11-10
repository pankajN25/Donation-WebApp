import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Lightbulb, Target } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated to providing comprehensive support, awareness, and resources for those affected by cancer.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  We believe that early detection saves lives. Our mission is to empower individuals and communities
                  with accurate cancer awareness information, emotional support, and navigation through treatment
                  options.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to breaking down barriers to healthcare access and ensuring that everyone has the
                  resources they need to make informed decisions about their health and wellbeing.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Prevention & Detection</h3>
                      <p className="text-sm text-muted-foreground">
                        Educating communities about risk factors, screenings, and early warning signs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Community Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Creating safe spaces for patients and survivors to connect and share experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Holistic Care</h3>
                      <p className="text-sm text-muted-foreground">
                        Supporting physical, emotional, and mental health throughout the cancer journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Cancer Awareness & Support was founded on the belief that everyone deserves access to reliable
                information, compassionate care, and community support. What began as a small initiative has grown into
                a comprehensive platform dedicated to serving patients, survivors, and those seeking prevention
                strategies.
              </p>

              <p>
                Every day, thousands of people receive a cancer diagnosis. We understand the overwhelming emotions,
                difficult decisions, and countless questions that follow. That's why we've dedicated ourselves to making
                this journey less daunting by providing evidence-based information, emotional support, and practical
                resources.
              </p>

              <p>
                Our team comprises healthcare professionals, survivors, caregivers, and advocates who share a common
                purpose: to make a meaningful difference in the lives of those affected by cancer. Together, we're
                working toward a future where early detection leads to better outcomes and no one faces their cancer
                journey alone.
              </p>

              <p>
                Whether you're seeking information about prevention, navigating treatment options, or connecting with
                others who understand your experience, we're here to support you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-bold text-lg text-foreground mb-2">Compassion</h3>
                <p className="text-sm text-muted-foreground">
                  We approach every interaction with empathy and understanding.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-bold text-lg text-foreground mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  All our information is evidence-based and transparently sourced.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-bold text-lg text-foreground mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  We work to remove barriers and serve everyone equitably.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-bold text-lg text-foreground mb-2">Empowerment</h3>
                <p className="text-sm text-muted-foreground">We enable informed decision-making and self-advocacy.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

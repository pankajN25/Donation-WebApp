import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p>
                  Cancer Awareness & Support ("we," "us," or "our") operates the cancersupport.org website. This page
                  informs you of our policies regarding the collection, use, and disclosure of personal data when you
                  use our website and the choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Collection and Use</h2>
                <p className="mb-4">
                  We collect several different types of information for various purposes to provide and improve our
                  service to you.
                </p>

                <h3 className="font-semibold text-foreground mb-2">Types of Data Collected:</h3>
                <ul className="space-y-2 ml-4">
                  <li>
                    • Personal Data: Name, email address, phone number, and other contact information you provide
                    through forms.
                  </li>
                  <li>
                    • Usage Data: Information about how you interact with our website, including pages visited and time
                    spent.
                  </li>
                  <li>
                    • Cookies and Tracking Technologies: We use cookies to track your preferences and improve your
                    experience.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Use of Data</h2>
                <p className="mb-4">Cancer Awareness & Support uses the collected data for various purposes:</p>
                <ul className="space-y-2 ml-4">
                  <li>• To provide and maintain our website</li>
                  <li>• To notify you about changes to our website</li>
                  <li>• To allow you to participate in interactive features of our website</li>
                  <li>• To provide customer support and respond to your inquiries</li>
                  <li>• To gather analysis or valuable information so that we can improve our service</li>
                  <li>• To monitor the usage of our website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Security of Data</h2>
                <p>
                  The security of your data is important to us but remember that no method of transmission over the
                  Internet or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy
                  Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:{" "}
                  <a href="mailto:privacy@cancersupport.org" className="text-primary hover:underline">
                    privacy@cancersupport.org
                  </a>
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mt-12">
                <h3 className="font-semibold text-foreground mb-2">Your Privacy Rights</h3>
                <p className="text-sm">
                  Depending on your location, you may have certain rights regarding your personal data, including the
                  right to access, correct, or delete your information. Please contact us to exercise these rights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

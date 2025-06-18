"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, Shield, FileText, Search, BarChart3, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import { ClientLogos } from "@/components/client-logos"
import { FeatureGrid } from "@/components/feature-grid"
import { PricingSection } from "@/components/pricing-section"
import { TrustSection } from "@/components/trust-section"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LegalAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#security" className="text-sm font-medium hover:text-primary">
              Security
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                    <span className="text-xs font-medium">AI-Powered Legal Research</span>
                  </motion.div>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                >
                  Transform Your Legal Practice with <span className="text-primary">AI</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-muted-foreground text-lg md:text-xl max-w-[600px]"
                >
                  Automate contract analysis, discover case precedents, and get AI-powered legal insights in seconds,
                  not hours.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg" className="gap-2">
                    Start Free Trial <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Book a Demo
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                  <span className="mx-2">•</span>
                  <Check className="h-4 w-4 text-primary" />
                  <span>14-day free trial</span>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative h-[400px] md:h-[500px] flex items-center justify-center"
              >
                <HeroAnimation />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogos />

        {/* Feature Grid */}
        <FeatureGrid />

        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Comprehensive AI Legal Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Explore our full suite of AI-powered legal tools designed for modern legal professionals.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/document-review" className="block h-full">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>Document Review</CardTitle>
                      <CardDescription>AI-powered legal document analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Automatically extract key clauses, identify risks, and get AI-powered recommendations.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/case-search" className="block h-full">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>Case Law Search</CardTitle>
                      <CardDescription>Find relevant legal precedents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Search className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Search and analyze case law with AI-powered insights and relevance scoring.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/predictive-analysis" className="block h-full">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>Predictive Analysis</CardTitle>
                      <CardDescription>AI-powered legal strategy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Get AI-driven strategy suggestions and outcome predictions based on legal patterns.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/legal-chatbot" className="block h-full">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>Legal Chatbot</CardTitle>
                      <CardDescription>AI assistant for legal questions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Get instant answers to legal questions and document-specific insights.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="/collaboration" className="block h-full">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>Team Collaboration</CardTitle>
                      <CardDescription>Multi-user legal workspace</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Collaborate with your team on legal research and document analysis in real-time.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link href="/security" className="block h-full">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>Security & Compliance</CardTitle>
                      <CardDescription>Legal-grade data protection</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        End-to-end encryption, GDPR compliance, and secure cloud storage for legal documents.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* Trust & Security Section */}
        <TrustSection />

        {/* Final CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Join 500+ Law Firms Automating Legal Research
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mt-4 text-lg text-muted-foreground"
              >
                Start your free trial today and see how LegalAI can transform your practice.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-10"
              >
                <LeadCaptureForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">LegalAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered legal research and contract analysis for modern law firms.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} LegalAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

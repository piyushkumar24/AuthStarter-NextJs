import { Poppins, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"]
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-12">
        <div className="flex items-center">
          <span className={cn("text-2xl font-bold text-gray-900", poppins.className)}>
            <span className="text-violet-600">Auth</span>Kit
          </span>
        </div>
        <div className="flex items-center gap-4">
          <LoginButton asChild>
            <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50">
              Sign in
            </Button>
          </LoginButton>
          <LoginButton mode="modal" asChild>
            <Button className="bg-violet-600 hover:bg-violet-700">
              Sign up
            </Button>
          </LoginButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className={cn("text-5xl md:text-6xl font-bold text-gray-900 leading-tight", poppins.className)}>
              Modern Authentication <span className="text-violet-600">Made Simple</span>
            </h1>
            <p className={cn("text-xl text-gray-600 leading-relaxed", inter.className)}>
              A complete authentication solution with Next.js 14, NextAuth v5, and Prisma. Secure, scalable, and ready for production.
            </p>
            <div className="flex flex-wrap gap-4">
              <LoginButton asChild>
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                  Get Started
                </Button>
              </LoginButton>
              <Button size="lg" variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50">
                <Link href="https://github.com/your-repo/nextjs-auth-starter" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </Link>
              </Button>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h3 className={cn("text-sm font-semibold text-gray-500 mb-4", inter.className)}>FEATURES</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Google Authentication", "Email & Password", "Two-Factor Auth", "Email Verification", "Password Reset", "Role-Based Access"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20 backdrop-blur-sm z-10 rounded-2xl"></div>
            <Image 
              src="/login.jpg" 
              alt="Authentication Interface" 
              fill 
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn("text-3xl md:text-4xl font-bold text-gray-900 mb-4", poppins.className)}>
              Everything You Need for Authentication
            </h2>
            <p className={cn("text-xl text-gray-600 max-w-3xl mx-auto", inter.className)}>
              A complete, production-ready authentication system built with the latest technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Next.js 14 & React",
                description: "Built with the latest version of Next.js for optimal performance and developer experience",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                )
              },
              {
                title: "NextAuth v5",
                description: "Complete authentication solution with OAuth providers and credential-based login",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                )
              },
              {
                title: "Prisma ORM",
                description: "Type-safe database client for PostgreSQL, MySQL, and SQLite with migrations",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                  </svg>
                )
              },
              {
                title: "TypeScript",
                description: "Fully typed codebase for better developer experience and fewer bugs",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                )
              },
              {
                title: "Tailwind CSS",
                description: "Beautiful, responsive UI with the popular utility-first CSS framework",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                  </svg>
                )
              },
              {
                title: "Email Verification",
                description: "Secure account verification and password reset flows via email",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-violet-200 hover:shadow-md transition-all">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className={cn("text-xl font-semibold text-gray-900 mb-2", poppins.className)}>
                  {feature.title}
                </h3>
                <p className={cn("text-gray-600", inter.className)}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", poppins.className)}>
            Ready to Get Started?
          </h2>
          <p className={cn("text-xl text-violet-100 mb-8 max-w-2xl mx-auto", inter.className)}>
            Join thousands of developers who are building secure, modern applications with our authentication starter kit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LoginButton asChild>
              <Button size="lg" variant="secondary" className="bg-white text-violet-700 hover:bg-gray-100">
                Create Account
              </Button>
            </LoginButton>
            <LoginButton mode="modal" asChild>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-violet-600">
                Sign In
              </Button>
            </LoginButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className={cn("text-xl font-bold text-gray-900", poppins.className)}>
              <span className="text-violet-600">Auth</span>Kit
            </span>
            <p className="text-gray-500 mt-2">
              © {new Date().getFullYear()} AuthKit. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

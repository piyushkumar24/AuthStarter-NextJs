"use client";

import { Poppins, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <main className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      {/* Decorative elements - more vibrant colors */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-12 relative z-10">
        <div className="flex items-center">
          <span className={cn("text-2xl font-bold text-gray-900 dark:text-white", poppins.className)}>
            <span className="text-fuchsia-600 dark:text-fuchsia-400">Auth</span>Kit
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LoginButton asChild>
            <Button variant="outline" className="border-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-50 dark:border-fuchsia-800 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900/20">
              Sign in
            </Button>
          </LoginButton>
          <LoginButton mode="modal" asChild>
            <Button className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-700 hover:to-cyan-700 dark:from-fuchsia-700 dark:to-cyan-700 dark:hover:from-fuchsia-600 dark:hover:to-cyan-600">
              Sign up
            </Button>
          </LoginButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-100 to-cyan-100 text-fuchsia-800 text-sm font-medium mb-2 dark:from-fuchsia-900/30 dark:to-cyan-900/30 dark:text-fuchsia-300">
              <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 mr-2"></span>
              Next.js 14 + NextAuth v5
            </div>
            <h1 className={cn("text-5xl md:text-6xl font-bold text-gray-900 leading-tight dark:text-white", poppins.className)}>
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-cyan-600 dark:from-fuchsia-400 dark:to-cyan-400">Authentication</span> Made Simple
            </h1>
            <p className={cn("text-xl text-gray-600 leading-relaxed dark:text-gray-300", inter.className)}>
              A complete authentication solution with Next.js 14, NextAuth v5, and Prisma. Secure, scalable, and ready for production.
            </p>
            <div className="flex flex-wrap gap-4">
              <LoginButton asChild>
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-700 hover:to-cyan-700 text-white shadow-lg shadow-fuchsia-600/20 dark:shadow-fuchsia-900/30 dark:from-fuchsia-700 dark:to-cyan-700 dark:hover:from-fuchsia-600 dark:hover:to-cyan-600">
                  Get Started
                </Button>
              </LoginButton>
              <Button size="lg" variant="outline" className="border-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-50 dark:border-fuchsia-800 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900/20">
                <Link href="https://github.com/your-repo/nextjs-auth-starter" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </Link>
              </Button>
            </div>
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className={cn("text-sm font-semibold text-gray-500 mb-4 dark:text-gray-400", inter.className)}>KEY FEATURES</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Google Authentication", 
                  "Email Verification", 
                  "Two-Factor Auth (2FA)", 
                  "Password Recovery", 
                  "Role-Based Access", 
                  "Dark/Light Mode"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white dark:from-fuchsia-500 dark:to-cyan-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-cyan-600/20 backdrop-blur-sm z-10 rounded-2xl dark:from-fuchsia-500/10 dark:to-cyan-600/10"></div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-20"></div>
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
      <section className="py-20 px-8 md:px-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-100 to-cyan-100 text-fuchsia-800 text-sm font-medium mb-4 mx-auto dark:from-fuchsia-900/30 dark:to-cyan-900/30 dark:text-fuchsia-300">
              <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 mr-2"></span>
              Powerful Features
            </div>
            <h2 className={cn("text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white", poppins.className)}>
              Everything You Need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-cyan-600 dark:from-fuchsia-400 dark:to-cyan-400">Authentication</span>
            </h2>
            <p className={cn("text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300", inter.className)}>
              A complete, production-ready authentication system built with the latest technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Next.js 14 & Auth.js v5",
                description: "Built with the latest version of Next.js and Auth.js for optimal performance and security",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fuchsia-600 dark:text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                )
              },
              {
                title: "Multiple Auth Providers",
                description: "Support for both credential-based login and OAuth with Google",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                )
              },
              {
                title: "Two-Factor Authentication",
                description: "Enhanced security with optional two-factor authentication (2FA)",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fuchsia-600 dark:text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                )
              },
              {
                title: "Role-Based Access Control",
                description: "Granular control over user permissions with role-based access control",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                )
              },
              {
                title: "Email Verification",
                description: "Secure account verification and password reset flows via email",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fuchsia-600 dark:text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                )
              },
              {
                title: "Dark/Light Mode",
                description: "Customizable user interface with support for both dark and light modes",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-fuchsia-200 hover:shadow-lg transition-all group dark:bg-gray-800 dark:border-gray-700 dark:hover:border-fuchsia-800">
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-fuchsia-50 to-cyan-50 inline-block group-hover:from-fuchsia-100 group-hover:to-cyan-100 transition-colors dark:from-fuchsia-900/20 dark:to-cyan-900/20 dark:group-hover:from-fuchsia-900/30 dark:group-hover:to-cyan-900/30">
                  {feature.icon}
                </div>
                <h3 className={cn("text-xl font-semibold text-gray-900 mb-2 dark:text-white", poppins.className)}>
                  {feature.title}
                </h3>
                <p className={cn("text-gray-600 dark:text-gray-400", inter.className)}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 px-8 md:px-12 bg-gray-50 dark:bg-gray-950 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-100 to-cyan-100 text-fuchsia-800 text-sm font-medium dark:from-fuchsia-900/30 dark:to-cyan-900/30 dark:text-fuchsia-300">
                <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 mr-2"></span>
                Developer Experience
              </div>
              <h2 className={cn("text-3xl md:text-4xl font-bold text-gray-900 leading-tight dark:text-white", poppins.className)}>
                Simple to Use, <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-cyan-600 dark:from-fuchsia-400 dark:to-cyan-400">Powerful</span> to Extend
              </h2>
              <p className={cn("text-lg text-gray-600 dark:text-gray-300", inter.className)}>
                AuthKit provides a complete authentication solution that's easy to implement and customize. With server components, client components, and API routes all protected with the same security model.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Server Components",
                    description: "Protect routes with server-side rendering for optimal performance"
                  },
                  {
                    title: "Client Components",
                    description: "Interactive UI components with built-in authentication state"
                  },
                  {
                    title: "API Protection",
                    description: "Secure API routes with role-based access control"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-600 flex items-center justify-center text-white dark:from-fuchsia-500 dark:to-cyan-500">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className={cn("text-lg font-semibold text-gray-900 dark:text-white", poppins.className)}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 shadow-2xl dark:bg-black/50 dark:border dark:border-gray-800">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                <code>{`// Protect your routes with RoleGate
import { RoleGate } from "@/components/auth/role-gate";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <RoleGate allowedRole="ADMIN">
        <div>
          This content is only visible to admins
        </div>
      </RoleGate>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-2xl p-12 text-center text-white shadow-xl shadow-fuchsia-600/20 dark:shadow-fuchsia-900/10">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", poppins.className)}>
            Ready to Get Started?
          </h2>
          <p className={cn("text-xl text-white/90 mb-8 max-w-2xl mx-auto", inter.className)}>
            Join thousands of developers who are building secure, modern applications with our authentication starter kit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LoginButton asChild>
              <Button size="lg" variant="secondary" className="bg-white text-fuchsia-700 hover:bg-gray-100 shadow-lg">
                Create Account
              </Button>
            </LoginButton>
            <LoginButton mode="modal" asChild>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-fuchsia-500/20">
                Sign In
              </Button>
            </LoginButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-12 border-t border-gray-200 dark:border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className={cn("text-xl font-bold text-gray-900 dark:text-white", poppins.className)}>
              <span className="text-fuchsia-600 dark:text-fuchsia-400">Auth</span>Kit
            </span>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} AuthKit. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-fuchsia-600 transition-colors dark:text-gray-400 dark:hover:text-fuchsia-400">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-fuchsia-600 transition-colors dark:text-gray-400 dark:hover:text-fuchsia-400">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-fuchsia-600 transition-colors dark:text-gray-400 dark:hover:text-fuchsia-400">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}

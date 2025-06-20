import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from '@/components/theme-script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AuthKit - Next.js Authentication',
  description: 'A complete authentication solution with Next.js 14, NextAuth v5, and Prisma',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeScript />
        </head>
        <body className={inter.className}>
          <ThemeProvider>
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  )
}

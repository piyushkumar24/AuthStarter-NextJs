"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { ThemeToggle } from "@/components/theme-toggle";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white mr-8">
            <span className="text-violet-600 dark:text-violet-400">Auth</span>Kit
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Button 
              asChild
              variant="ghost"
              className={pathname === "/profile" ? "bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300" : "text-gray-700 dark:text-gray-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-300"}
            >
              <Link href="/profile">
                Profile
              </Link>
            </Button>
            <Button 
              asChild
              variant="ghost"
              className={pathname === "/settings" ? "bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300" : "text-gray-700 dark:text-gray-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-300"}
            >
              <Link href="/settings">
                Settings
              </Link>
            </Button>
            <Button 
              asChild
              variant="ghost"
              className={pathname === "/admin" ? "bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300" : "text-gray-700 dark:text-gray-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-300"}
            >
              <Link href="/admin">
                Admin
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

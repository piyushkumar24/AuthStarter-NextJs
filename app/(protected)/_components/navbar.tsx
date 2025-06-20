"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 mr-8">
            <span className="text-violet-600">Auth</span>Kit
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Button 
              asChild
              variant="ghost"
              className={pathname === "/profile" ? "bg-violet-50 text-violet-700" : "text-gray-700 hover:bg-violet-50 hover:text-violet-700"}
            >
              <Link href="/profile">
                Profile
              </Link>
            </Button>
            <Button 
              asChild
              variant="ghost"
              className={pathname === "/settings" ? "bg-violet-50 text-violet-700" : "text-gray-700 hover:bg-violet-50 hover:text-violet-700"}
            >
              <Link href="/settings">
                Settings
              </Link>
            </Button>
            <Button 
              asChild
              variant="ghost"
              className={pathname === "/admin" ? "bg-violet-50 text-violet-700" : "text-gray-700 hover:bg-violet-50 hover:text-violet-700"}
            >
              <Link href="/admin">
                Admin
              </Link>
            </Button>
          </div>
        </div>
        <UserButton />
      </div>
    </nav>
  );
};

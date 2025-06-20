"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export const NavButtons = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  if (isAuthenticated) {
    return (
      <Button
        variant="outline"
        className="border-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-50 dark:border-fuchsia-800 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900/20 flex items-center gap-2"
        asChild
      >
        <Link href="/profile">
          <User className="h-4 w-4" />
          My Account
        </Link>
      </Button>
    );
  }

  return (
    <>
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
    </>
  );
}; 
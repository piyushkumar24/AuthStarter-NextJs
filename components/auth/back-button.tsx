"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  label: string;
};

export const BackButton = ({
  href,
  label,
}: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="font-normal text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      size="sm"
      asChild
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  );
};

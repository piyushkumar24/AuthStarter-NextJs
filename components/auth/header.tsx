import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className={cn(
        "text-3xl font-semibold",
        font.className,
      )}>
        <span className="text-blue-600 dark:text-blue-400">Auth</span>
        <span className="dark:text-white">Kit</span>
      </h1>
      <p className="text-muted-foreground text-sm mt-2 dark:text-gray-400">
        {label}
      </p>
    </div>
  );
};

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
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn(
        "text-3xl font-bold text-gray-900",
        font.className,
      )}>
        <span className="text-violet-600">Auth</span>Kit
      </h1>
      <p className="text-gray-600 text-sm">
        {label}
      </p>
    </div>
  );
};

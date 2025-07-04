import { AlertTriangle } from "lucide-react";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <AlertTriangle className="text-destructive dark:text-red-400" size={48} />
      </div>
    </CardWrapper>
  );
};

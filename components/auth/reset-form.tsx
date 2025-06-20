"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { ResetSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,  
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { reset } from "@/actions/reset";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");
    
    // Show loading toast
    const loadingToast = toast.loading("Sending reset instructions...");

    startTransition(() => {
      reset(values)
        .then((data) => {
          toast.dismiss(loadingToast);
          
          if (data?.error) {
            setError(data.error);
            toast.error("Failed to send reset email", {
              description: data.error,
            });
          }
          
          if (data?.success) {
            form.reset();
            setSuccess(data.success);
            toast.success("Reset email sent!", {
              description: "Check your inbox for the password reset link",
            });
          }
        })
        .catch(() => {
          toast.dismiss(loadingToast);
          setError("Something went wrong");
          toast.error("Something went wrong", {
            description: "Please try again later",
          });
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Forgot your password?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="text-center mb-4 text-sm text-gray-600 dark:text-gray-400">
        Enter your email address and we'll send you a link to reset your password.
      </div>
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
                        className="pl-10 bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus-visible:ring-blue-500/20 dark:focus-visible:ring-blue-500/20"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          {success ? (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mt-4">
              <h3 className="font-medium text-blue-800 dark:text-blue-300 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2" />
                Next Steps
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                Check your email inbox for the password reset link. The link will expire in 1 hour.
              </p>
            </div>
          ) : (
            <Button
              disabled={isPending}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              {isPending ? "Sending..." : "Send reset instructions"}
            </Button>
          )}
        </form>
      </Form>
    </CardWrapper>
  );
};

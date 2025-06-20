'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition, useState } from 'react';
import { useSession } from 'next-auth/react';

import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SettingsSchema } from '@/schemas';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { settings } from '@/actions/settings';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCurrentUser } from '@/hooks/use-current-user';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { UserRole } from '@prisma/client';
import { Settings2, ArrowLeft, User, Mail, Lock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

const SettingsPage = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    toast.loading("Saving settings...");
    setError(undefined);
    setSuccess(undefined);
    
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            toast.error(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
            toast.success(data.success);
          }
        })
        .catch(() => {
          setError('Something went wrong!');
          toast.error('Something went wrong!');
        });
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-4xl bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border-gray-200 dark:border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/30 dark:to-cyan-900/30">
              <Settings2 className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent dark:from-fuchsia-400 dark:to-cyan-400">
                Account Settings
              </CardTitle>
              <CardDescription>
                Manage your account preferences and security settings
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 p-4 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30 mb-6">
                  <h3 className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    <User className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" />
                    Profile Information
                  </h3>
                
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John Doe"
                            disabled={isPending}
                            className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {user?.isOAuth === false && (
                  <div className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 p-4 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30 mb-6">
                    <h3 className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                      <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                      Email Settings
                    </h3>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="john.doe@example.com"
                              type="email"
                              disabled={isPending}
                              className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {user?.isOAuth === false && (
                  <div className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 p-4 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30 mb-6">
                    <h3 className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                      <Lock className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" />
                      Password Settings
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">Current Password</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="••••••"
                                type="password"
                                disabled={isPending}
                                className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">New Password</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="••••••"
                                type="password"
                                disabled={isPending}
                                className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}
                
                <div className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 p-4 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30 mb-6">
                  <h3 className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    <ShieldCheck className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                    Security Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Account Role</FormLabel>
                          <Select
                            disabled={isPending}
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                                <SelectValue placeholder="Select a role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                              <SelectItem value={UserRole.USER}>User</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {user?.isOAuth === false && (
                      <FormField
                        control={form.control}
                        name="isTwoFactorEnabled"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border border-gray-200 dark:border-gray-800 p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel className="text-gray-700 dark:text-gray-300">Two Factor Authentication</FormLabel>
                              <FormDescription>
                                Enable two factor authentication for your account
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                disabled={isPending}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              
              <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-6 px-0">
                <Button variant="outline" asChild className="border-gray-300 dark:border-gray-700 dark:text-gray-300">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button 
                  disabled={isPending} 
                  type="submit"
                  className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-700 hover:to-cyan-700 dark:from-fuchsia-700 dark:to-cyan-700 dark:hover:from-fuchsia-600 dark:hover:to-cyan-600"
                >
                  {isPending ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;

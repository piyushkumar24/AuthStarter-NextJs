"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Shield, Key, User, CheckCircle2, Calendar, Clock, Home } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { format } from "date-fns";

export default function ProfilePage() {
  const user = useCurrentUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Show welcome toast when component mounts
    if (user?.name) {
      toast.success(`Welcome back, ${user.name}!`, {
        description: "You've successfully logged in to your account.",
        duration: 5000,
      });
    }
  }, [user?.name]);

  if (!mounted) {
    return null;
  }

  // Format a placeholder date for member since
  const formattedDate = "January 2023";

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-4xl bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border-gray-200 dark:border-gray-800">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent dark:from-fuchsia-400 dark:to-cyan-400">Your Profile</CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400">
                Welcome back to your account dashboard
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/20 dark:text-fuchsia-300 dark:border-fuchsia-800 px-3 py-1 self-start md:self-auto">
              {user?.role}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800 shadow-lg">
                  <AvatarImage src={user?.image || ""} />
                  <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-cyan-600 text-white text-xl">
                    {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-4 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <User className="mr-2 h-4 w-4" />
                        Full Name
                      </div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{user?.name || "Not provided"}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Address
                      </div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{user?.email}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Shield className="mr-2 h-4 w-4" />
                        Account Type
                      </div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {user?.isOAuth ? "OAuth (Google)" : "Email & Password"}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-2 h-4 w-4" />
                        Member Since
                      </div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {formattedDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 p-4 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30">
                  <div className="flex items-center mb-2">
                    <Key className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400 mr-2" />
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Two-Factor Authentication</h3>
                  </div>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full ${user?.isTwoFactorEnabled ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {user?.isTwoFactorEnabled ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link href="/settings">
                      <Button variant="outline" size="sm" className="w-full border-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-50 dark:border-fuchsia-800 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900/20">
                        Manage
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 p-4 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30">
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2" />
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Email Verification</h3>
                  </div>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full ${user?.email ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {user?.email ? "Verified" : "Not Verified"}
                    </p>
                  </div>
                  {user?.email && !user?.isOAuth && (
                    <div className="mt-4">
                      <Link href="/settings">
                        <Button variant="outline" size="sm" className="w-full border-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-50 dark:border-fuchsia-800 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900/20">
                          Verify Email
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="activity" className="space-y-4">
              <div className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 p-4 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400 mr-2" />
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Recent Activity</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 mr-2"></div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Logged in successfully</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Just now</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-fuchsia-500 mt-2 mr-2"></div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Profile viewed</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">5 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-6">
          <Button variant="outline" asChild className="border-gray-300 dark:border-gray-700 dark:text-gray-300">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" asChild className="border-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-50 dark:border-fuchsia-800 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900/20">
              <Link href="/settings">
                Settings
              </Link>
            </Button>
            <LogoutButton>
              <Button variant="destructive">
                Sign out
              </Button>
            </LogoutButton>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
} 
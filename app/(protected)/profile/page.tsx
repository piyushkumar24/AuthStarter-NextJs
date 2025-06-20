"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Shield, Key, User, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function ProfilePage() {
  const user = useCurrentUser();
  const [mounted, setMounted] = useState(false);
  const [passwordChanges] = useState(3); // This would ideally come from the database

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

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-4xl bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border-gray-200 dark:border-gray-800">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">Your Profile</CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400">
                Welcome back to your account dashboard
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800 px-3 py-1">
              {user?.role}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800 shadow-lg">
                  <AvatarImage src={user?.image || ""} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-700 text-white text-xl">
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
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Key className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Two-Factor Authentication</h3>
                  </div>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full ${user?.isTwoFactorEnabled ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {user?.isTwoFactorEnabled ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Email Verification</h3>
                  </div>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full ${user?.email ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {user?.email ? "Verified" : "Not Verified"}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Key className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Password Changes</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {passwordChanges} {passwordChanges === 1 ? 'time' : 'times'}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-gray-200 dark:border-gray-800 pt-6">
          <Button variant="outline" onClick={() => window.location.href = "/"} className="border-gray-300 dark:border-gray-700 dark:text-gray-300">
            Back to Home
          </Button>
          <LogoutButton>
            <Button variant="destructive">
              Sign out
            </Button>
          </LogoutButton>
        </CardFooter>
      </Card>
    </div>
  );
} 
"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const user = useCurrentUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-3xl bg-white/95 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-gray-800">Your Profile</CardTitle>
              <CardDescription className="text-gray-500">
                Welcome back to your account dashboard
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 px-3 py-1">
              {user?.role}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src={user?.image || ""} />
              <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-700 text-white text-xl">
                {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-4 flex-1">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                <p className="text-lg font-semibold text-gray-900">{user?.name || "Not provided"}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                <p className="text-lg font-semibold text-gray-900">{user?.email}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-500">Account Created</h3>
                <p className="text-lg font-semibold text-gray-900">
                  {user?.createdAt ? format(new Date(user.createdAt), "PPP") : "Unknown"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Account Type</h3>
              <p className="text-gray-600">
                {user?.isOAuth ? "OAuth (Google)" : "Email & Password"}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Two Factor Authentication</h3>
              <p className="text-gray-600">
                {user?.isTwoFactorEnabled ? "Enabled" : "Disabled"}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" onClick={() => window.location.href = "/"}>
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
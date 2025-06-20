"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";
import { Shield, Server, Database, ArrowLeft } from "lucide-react";
import Link from "next/link";

const AdminPage = () => {
  const onServerActionClick = () => {
    toast.loading("Testing admin server action...");
    
    admin()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }

        if (data.success) {
          toast.success(data.success);
        }
      })
  }
  
  const onApiRouteClick = () => {
    toast.loading("Testing admin API route...");
    
    fetch("/api/admin")
      .then((response) => {
        if (response.ok) {
          toast.success("Allowed API Route!");
        } else {
          toast.error("Forbidden API Route!");
        }
      })
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-4xl bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border-gray-200 dark:border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/30 dark:to-cyan-900/30">
              <Shield className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent dark:from-fuchsia-400 dark:to-cyan-400">
                Admin Dashboard
              </CardTitle>
              <CardDescription>
                Manage administrative functions and test access controls
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <RoleGate allowedRole={UserRole.ADMIN}>
            <div className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 dark:from-fuchsia-900/10 dark:to-cyan-900/10 p-4 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30 mb-6">
              <FormSuccess
                message="You have administrator access to this dashboard"
              />
            </div>
          </RoleGate>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 items-start justify-between rounded-lg border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-to-r from-fuchsia-100 to-cyan-100 dark:from-fuchsia-900/20 dark:to-cyan-900/20">
                  <Server className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Admin-only API Route</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Test access to protected API endpoints
                  </p>
                </div>
              </div>
              <Button 
                onClick={onApiRouteClick}
                className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-700 hover:to-cyan-700 dark:from-fuchsia-700 dark:to-cyan-700 dark:hover:from-fuchsia-600 dark:hover:to-cyan-600 w-full"
              >
                Test API Access
              </Button>
            </div>

            <div className="flex flex-col gap-4 items-start justify-between rounded-lg border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-to-r from-fuchsia-100 to-cyan-100 dark:from-fuchsia-900/20 dark:to-cyan-900/20">
                  <Database className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Admin-only Server Action</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Test access to protected server actions
                  </p>
                </div>
              </div>
              <Button 
                onClick={onServerActionClick}
                className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-700 hover:to-cyan-700 dark:from-fuchsia-700 dark:to-cyan-700 dark:hover:from-fuchsia-600 dark:hover:to-cyan-600 w-full"
              >
                Test Server Action
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <Button variant="outline" asChild className="border-gray-300 dark:border-gray-700 dark:text-gray-300">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminPage;

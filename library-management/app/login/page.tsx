"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [tab, setTab] = useState("signin")
  return (
    <main className="flex min-h-svh items-center justify-center px-4">
      <Card className="w-full max-w-md bg-card border border-border">
        <CardHeader>
          <CardTitle className="text-balance">Welcome back</CardTitle>
          <CardDescription>Sign in or create an account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="mt-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email or Username</Label>
                  <Input id="email" type="text" placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </Label>
                  </div>
                  <Link href="#" className="text-sm text-primary underline underline-offset-4">
                    Forgot password?
                  </Link>
                </div>
                <Button type="button" className="w-full bg-primary text-primary-foreground">
                  Sign In
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  {"Don't have an account? "}
                  <button
                    type="button"
                    className="text-primary underline underline-offset-4"
                    onClick={() => setTab("signup")}
                  >
                    Sign up
                  </button>
                </p>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="mt-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input id="fullName" type="text" placeholder="Jane Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email2">Email</Label>
                  <Input id="email2" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username (optional)</Label>
                  <Input id="username" type="text" placeholder="janedoe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password2">Password</Label>
                  <Input id="password2" type="password" placeholder="••••••••" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <Input id="confirm" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the terms & conditions
                  </Label>
                </div>
                <Button type="button" className="w-full bg-primary text-primary-foreground">
                  Create Account
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-primary underline underline-offset-4"
                    onClick={() => setTab("signin")}
                  >
                    Sign in
                  </button>
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  )
}

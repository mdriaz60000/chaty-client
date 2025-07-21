// src/pages/AuthPage.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-md p-8 space-y-6 border rounded-lg bg-background">
        <h1 className="text-2xl font-bold text-center">Welcome to Chaty</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Sign In</Button>
        </div>
      </div>
    </div>
  );
}
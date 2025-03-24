"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoogleIcon from "@/app/_components/icons/GoogleIcon";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  const handleGoogleLogin = () => {
    console.log("Initiating Google Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Forgot Password?
          </CardTitle>
          <p className="text-gray-500 mt-2">
            Enter your email to receive a password reset link
          </p>
        </CardHeader>
        <CardContent>
          {/* Forgot Password Form */}
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2"
              />
            </div>
            <Button type="submit" className="w-full mt-4">
              Send Reset Link
            </Button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Login Option */}
            <Button
              variant="outline"
              className="w-full mb-4 flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
              onClick={handleGoogleLogin}
            >
              <GoogleIcon />
              Continue with Google
            </Button>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Remembered your password?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

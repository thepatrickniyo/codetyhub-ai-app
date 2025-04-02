"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GoogleIcon from '@/app/_components/icons/GoogleIcon';
import Link from 'next/link';
import { loginUserAction } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

// Google Icon as an SVG component


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = () => {
    // Placeholder for Google OAuth login logic
    console.log('Initiating Google Login');
  };

interface LoginFormEvent extends React.FormEvent<HTMLFormElement> {
    preventDefault: () => void;
}

const handleEmailLogin = async (e: LoginFormEvent) => {
    e.preventDefault();
    // Placeholder for email/password login logic
    console.log('Logging in with:', email);
    try{
      setIsLoading(true);
      await loginUserAction({
        email,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        console.log("Login successful:", res);
        // Redirect or show success message
        toast.success("Login successful");
        return router.push("/dashboard");
      }
      )
    }
    catch (error) {
      setIsLoading(false);
      console.error('Login failed:', error);
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <Toaster />
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">Welcome Back</CardTitle>
          <p className="text-gray-500 mt-2">Sign in to continue to your account</p>
        </CardHeader>
        <CardContent>

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-700">Email</Label>
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
            <div>
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input 
                id="password"
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2"
              />
              <Link 
                href="/forgot-password" 
                className="text-sm text-blue-600 hover:underline float-right mt-1"
              >
                Forgot password?
              </Link>
            </div>
            <Button type="button" className="w-full mt-4">
                {isLoading ? 'Logging in...' : 'Login'}
            </Button>
             {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
            {/* Google Login Button */}
            <Button 
                variant="outline" 
                className="w-full mb-4 flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
                onClick={handleGoogleLogin}
            >
                <GoogleIcon />
                Continue with Google
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account? {' '}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
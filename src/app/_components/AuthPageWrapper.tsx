"use client";

import { usePathname } from "next/navigation";

export default function AuthPageWrapper() {
  const pathname = usePathname();
//   const isLogin = pathname === "/login";

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen  p-10 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-extrabold text-white">
          {pathname === "/login" ? "Welcome Back!" : (pathname === "/forgot-password") ? "Forgot your password?" : "Join the Future of AI"}
        </h1>
        <p className="text-yellow-600 mt-6 font-light text-xl">
          {pathname === "/login"
            ? "Log in to continue your learning journey, connect with mentors, and grow your portfolio." :
          pathname === "/forgot-password" 
            ? "Enter your email to reset your password and regain access to your account."
            : "Sign up to access AI courses, build your portfolio, and connect with top mentors."}
        </p>
      </div>
    </main>
  );
}

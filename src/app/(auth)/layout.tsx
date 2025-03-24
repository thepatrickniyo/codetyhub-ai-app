import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import AuthPageWrapper from "@/app/_components/AuthPageWrapper";

export const metadata: Metadata = {
  title: "Codetyhub AI App",
  description: "Unlock Your Potential: AI Learning, Mentorship & Career Growth for University Students",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <main className="min-h-screen bg-white w-full flex">
        <section className="w-2/4 bg-gradient-to-br from-purple-700 via-blue-600 to-teal-400">
          <AuthPageWrapper />
        </section>
        {/* bg-gradient-to-br from-purple-700 via-blue-600 to-teal-400 */}
        <section className="w-2/4">
           <TRPCReactProvider>{children}</TRPCReactProvider>
        </section>
      </main>
      </body>
    </html>
  );
}

import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import DashboardSidebar from "../_components/dashboard/Sidebar";

export const metadata: Metadata = {
  title: "Codetyhub AI App",
  description: "Unlock Your Potential: AI Learning, Mentorship & Career Growth for University Students",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <section className="flex">
            <DashboardSidebar />
            {children}
        </section>
      </body>
    </html>
  );
}

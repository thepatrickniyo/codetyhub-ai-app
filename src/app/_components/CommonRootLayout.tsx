import Navigation from "./Navigation";

export default function CommonRootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-teal-400">
        <Navigation />
         {children}
        <footer className="container mx-auto px-4 py-6 mt-20 text-center text-teal-200">
          <p>&copy; {new Date().getFullYear()} Codetyhub AI App. All rights reserved.</p>
        </footer>
      </main>
    )
}
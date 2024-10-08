import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "First yutopia project",
  description: "Create with Next.js 14.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="mx-auto min-h-screen justify-center w-full">
          <Navbar />
          <div className="p-8">{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}

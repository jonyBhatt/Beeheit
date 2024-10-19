import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-svh w-full ">
      <Navbar />
      <main className="flex-grow h-full">{children}</main>
      <Footer />
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
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
      <main className="flex flex-col min-h-svh h-full justify-center items-center">
       {children}
      </main>
      <Footer />
    </div>
  );
}

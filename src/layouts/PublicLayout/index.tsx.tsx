import Footer from "@/components/Footer";
import Header from "@/components/Header";
import clsx from "cn/lite";
import React from "react";

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className={clsx("w-full", "mx-auto")}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

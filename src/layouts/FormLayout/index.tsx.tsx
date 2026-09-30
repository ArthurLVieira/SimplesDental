import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type FormLayoutProps = {
  children: React.ReactNode;
};

export default function FormLayout({ children }: FormLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

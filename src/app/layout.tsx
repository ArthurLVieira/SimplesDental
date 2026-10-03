import type { Metadata } from "next";
import React from "react";
import "@/app/globals.css";
import PublicLayout from "@/layouts/PublicLayout/index.tsx";

export const metadata: Metadata = {
  title: {
    default: "Simples Dental",
    template: "%s | Simples Dental",
  },
  description: "Desecrção da página",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

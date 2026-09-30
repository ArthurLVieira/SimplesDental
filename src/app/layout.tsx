import Container from "@/components/Container";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

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
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}

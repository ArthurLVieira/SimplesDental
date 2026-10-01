"use client";

import Link from "@/components/Link";
import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogInIcon, MenuIcon, SettingsIcon, UserIcon } from "lucide-react";
import { clsx } from "cn";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = null; // Replace with your session logic

  const NavItems = [
    {
      href: "#",
      label: "Profissionais",
      icon: <UserIcon className="w-6 h-6" />,
    },
    {
      href: "#",
      label: "Serviços",
      icon: <SettingsIcon className="w-6 h-6" />,
    },
  ];

  const NavLinks = () => (
    <>
      {NavItems.map((item, index) => (
        <Button
          key={index}
          className="bg-transparent hover:bg-slate-100 text-zinc-700 hover:text-emerald-500"
          onClick={() => setIsOpen(false)}
        >
          <Link href={item.href} className="flex items-center space-x-2">
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </Button>
      ))}

      {session ? (
        <Button
          className={clsx("bg-slate-950 text-white")}
          onClick={() => setIsOpen(false)}
        >
          <Link
            href="/dashboard"
            className={clsx("flex items-center space-x-2")}
          >
            <UserIcon className="w-6 h-6" />
            <span>Dashboard</span>
          </Link>
        </Button>
      ) : (
        <Button
          className={clsx("bg-slate-950 text-white")}
          onClick={() => setIsOpen(false)}
        >
          <Link href="/login" className={clsx("flex items-center space-x-2")}>
            <LogInIcon className="w-6 h-6" />
            <span>Login</span>
          </Link>
        </Button>
      )}
    </>
  );

  function handleMenuClick() {
    setIsOpen(true);
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-\[999] py-4 px-6 bg-white">
      <div className="container flex mx-auto items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900 font-serif">
          Simples<span className="text-emerald-500">Dental</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            <NavLinks />
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden flex items-center">
            <Button
              onClick={handleMenuClick}
              className={clsx(
                "text-black hover:bg-transparent",
                "hover:text-emerald-500",
              )}
              variant="ghost"
              size="icon"
            >
              <MenuIcon className="w-6 h-6 inline-block ml-1" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className={clsx(
              "w-/[240px] sm:w-/[100px/] md:w-/[200px] lg:w-/[300px] z-/[9999/]",
              "fixed top-0 right-0 h-screen overflow-y-auto shadow-lg",
              "bg-white p-3",
              "",
            )}
          >
            <SheetTitle className="text-lg font-bold text-zinc-900">
              Menu
            </SheetTitle>

            <SheetDescription className="text-zinc-600">
              navegação
            </SheetDescription>

            <nav className="flex flex-col space-y-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

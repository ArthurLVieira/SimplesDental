import Link from "@/components/Link";
import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-\[999] py-4 px-6 bg-white">
      <div className="container flex mx-auto items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Simples<span className="text-emerald-500">Dental</span>
        </Link>

        <nav className="hidden md:flex items-center">
          <a href="#">Profissionais</a>
        </nav>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Button
              className="text-black hover:bg-transparent"
              variant="ghost"
              size="icon"
            >
              <MenuIcon className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-/[240px] sm:w-/[300px] z-/[9999]"
          >
            <SheetTitle>Menu</SheetTitle>

            <SheetDescription>navegação</SheetDescription>

            <nav>
              <a href="#">Profissionais</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

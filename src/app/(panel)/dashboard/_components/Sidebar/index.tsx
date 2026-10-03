"use client";

import Link from "@/components/Link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { clsx } from "cn";
import { CalendarCheck2Icon, ListIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={clsx("flex min-h-screen w-full")}>
      <div
        className={clsx("flex flex-1 flex-col transition-all duration-300", {
          "md:ml-20": isCollapsed,
          "md:ml-64": !isCollapsed,
        })}
      >
        <header
          className={clsx(
            "md:hidden flex items-center justify-between border-b",
            "px-2 md:px-6 h-14 z-10 sticky top-0 bg-background/90 backdrop-blur-sm border-b-slate-200",
          )}
        >
          <Sheet>
            <div className="flex items-center justify-between w-full">
              <SheetTrigger>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden ring-0 ring-transparent"
                >
                  <ListIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <h1 className="text-base md:text-lg font-semibold">
                Simples<span className="text-emerald-500">Dental</span>
              </h1>
            </div>

            <SheetContent
              side="right"
              className={clsx(
                "sm:max-w-xs text-black bg-white ring-0 ring-transparent",
                "p-4",
              )}
            >
              <SheetTitle>
                <h1 className="text-base md:text-lg font-semibold">
                  Simples<span className="text-emerald-500">Dental</span>
                </h1>
              </SheetTitle>

              <SheetDescription>Menu administrativo</SheetDescription>

              <nav className="grid gap-2 text-base pt-5">
                <SidebarLink
                  href="/dashboard"
                  label="Dashboard"
                  pathname={pathname}
                  isCollapsad={isCollapsed}
                  icon={<CalendarCheck2Icon className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/services"
                  label="Services"
                  pathname={pathname}
                  isCollapsad={isCollapsed}
                  icon={<CalendarCheck2Icon className="w-6 h-6" />}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 py-4 px-2 md:p-6">{children}</main>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  isCollapsad: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  icon,
  label,
  pathname,
  isCollapsad,
}) => {
  return (
    <Link href={href}>
      <div
        className={clsx(
          "flex flex-row gap-3 items-center justify-center",
          "rounded-md px-3 py-2 transition-colors",
          {
            "text-white bg-blue-500 hover:bg-blue-700": pathname === href,
            "text-slate-600 hover:bg-slate-200": pathname !== href,
          },
        )}
      >
        <span className="w-6 h-6">{icon}</span>
        {!isCollapsad && <span>{label}</span>}
      </div>
    </Link>
  );
};

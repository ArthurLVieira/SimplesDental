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
import {
  BanknoteIcon,
  CalendarCheck2Icon,
  ChevronLeft,
  ChevronRight,
  Key,
  ListIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Logo from "../../../../../../public/images/logo4.png";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      pathname: pathname,
      isCollapsad: isCollapsed,
      icon: <CalendarCheck2Icon className="w-6 h-6" />,
    },
    {
      href: "/dashboard/services",
      label: "Services",
      pathname: pathname,
      isCollapsad: isCollapsed,
      icon: <SettingsIcon className="w-6 h-6" />,
    },
    {
      href: "/dashboard/plans",
      label: "Planos",
      pathname: pathname,
      isCollapsad: isCollapsed,
      icon: <BanknoteIcon className="w-6 h-6" />,
    },
    {
      href: "/dashboard/profile",
      label: "Meu perfil",
      pathname: pathname,
      isCollapsad: isCollapsed,
      icon: <UserIcon className="w-6 h-6" />,
    },
  ];

  function handleSideBarMenu() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className={clsx("flex min-h-screen w-full")}>
      <aside
        className={clsx(
          "flex flex-col border-r bg-white transition-all",
          "duration-300 p-4 h-full",
          {
            "w-20": isCollapsed,
            "w-64": !isCollapsed,
            "hidden md:flex md:fixed": true,
          },
        )}
      >
        {!isCollapsed && (
          <div className="mb-2">
            <Image
              src={Logo}
              alt="Logo Simples Dental"
              priority
              quality={100}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        )}

        <Button
          className={clsx(
            "bg-slate-100 hover:bg-slate-200",
            "text-zinc-800 self-end mb-2",
          )}
          onClick={handleSideBarMenu}
        >
          {!isCollapsed ? (
            <ChevronLeft className="w-12 h-12" />
          ) : (
            <ChevronRight className="w-12 h-12" />
          )}
        </Button>

        {isCollapsed && (
          <nav>
            {links.map((link, index) => (
              <SidebarLink
                key={index}
                href={link.href}
                label={link.label}
                pathname={link.pathname}
                isCollapsad={link.isCollapsad}
                icon={link.icon}
              />
            ))}
          </nav>
        )}

        <Collapsible open={!isCollapsed}>
          <CollapsibleContent>
            <nav className="flex flex-col gap-1 overflow-hidden">
              <span className="text-sm text-slate-400 font-medium mt-1 uppercase">
                Painel
              </span>

              {links.map((link, index) => (
                <SidebarLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  pathname={link.pathname}
                  isCollapsad={link.isCollapsad}
                  icon={link.icon}
                />
              ))}
            </nav>
          </CollapsibleContent>
        </Collapsible>
      </aside>

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
              side="left"
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
                {links.map((link, index) => (
                  <SidebarLink
                    key={index}
                    href={link.href}
                    label={link.label}
                    pathname={link.pathname}
                    isCollapsad={link.isCollapsad}
                    icon={link.icon}
                  />
                ))}
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
  key?: React.Key | null | undefined;
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  isCollapsad: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  key,
  href,
  icon,
  label,
  pathname,
  isCollapsad,
}) => {
  return (
    <Link href={href} key={key}>
      <div
        className={clsx(
          "flex flex-row gap-3 items-center mb-2",
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

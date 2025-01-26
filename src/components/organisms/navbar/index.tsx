"use client";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Aliste-se", path: "/your-path" },
    { title: "Vip", path: "/your-path" },
    { title: "Sobre a Mib", path: "/your-path" },
  ];

  return (
    <nav className="fixed z-10 w-full border-b border-gray-950/5">
      <div className="bg-gray-950 text-gray-300">
        <div className="flex px-4 py-1 items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex max-md:hidden gap-7 items-center">
            {menus.map((menu) => (
              <Link
                className="text-sm/6 hover:text-white"
                key={menu.title}
                href={menu.path}
              >
                {menu.title}
              </Link>
            ))}
            <Link className="text-sm/6 hover:text-discord" href="#">
              <FaDiscord size={25} />
            </Link>
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <HiMenu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-950 mt-1 mr-1 py-1 px-2 w-56 border rounded-sm">
                {menus.map((menu, idx) => (
                  <>
                    <DropdownMenuItem key={menu.title} className="p-0">
                      <Link
                        className="w-full p-1 text-sm/6 hover:text-white"
                        href={menu.path}
                      >
                        {menu.title}
                      </Link>
                    </DropdownMenuItem>
                    {menus.length !== idx + 1 && <DropdownMenuSeparator />}
                  </>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

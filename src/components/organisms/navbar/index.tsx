"use client";
import { Logo } from "@/components/atoms/Logo";
import { VerticalSeparator } from "@/components/atoms/VerticalSeparator";
import { Avatar } from "@/components/molecules/avatar";
import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menus = [
    { title: "Home", path: "/home" },
    { title: "Sobre a MIB", path: "/about" },
    { title: "Aliste-se", path: "/enlistment" },
    { title: "Vip", path: "/vip" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-20 w-full bg-gray-950 border-b px-4 py-4 flex justify-between items-center border-bottom-300">
        <a className="text-3xl font-bold leading-none" href="#">
          <Logo />
        </a>
        <div className="flex">
          <a
            className="inline-block lg:ml-auto lg:mr-3 py-2 px-6  text-sm text-gray-400 hover:text-white font-bold  rounded-xl transition duration-200"
            href="#"
          >
            <FaDiscord size={20} />
          </a>
          <Avatar />

          <div className="lg:hidden">
            <button
              onClick={handleOpen}
              className="navbar-burger flex items-center text-gray-400 hover:text-white p-3"
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          {menus.map((menu, index) => (
            <React.Fragment key={index}>
              <li key={index}>
                <a
                  className="text-sm text-gray-400 hover:text-white px-2 py-3"
                  href={menu.path}
                >
                  {menu.title}
                </a>
              </li>

              {menus.length !== index + 1 && <VerticalSeparator />}
            </React.Fragment>
          ))}
        </ul>
      </nav>
      <div className={`navbar-menu relative z-50 ${open ? "" : "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto  bg-gray-950">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Logo />
            </a>
            <button className="navbar-close" onClick={handleClose}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {menus.map((menu, index) => (
                <li className="mb-1" key={menu.title}>
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-900 hover:text-white rounded"
                    href={menu.path}
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6 text-center">
              <a
                className="inline-block p-3 ml-auto text-sm text-gray-400 hover:text-white font-bold"
                href="#"
              >
                <FaDiscord size={20} />
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

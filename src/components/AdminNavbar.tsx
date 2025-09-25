"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/images/logo-light.svg";

export default function AdminNavbar() {
  const menuItems = [
    {
      name: "Postingan",
      href: "/admin",
      icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
    },
  ];

  return (
    <Navbar fluid rounded className="!bg-white mb-6 shadow-md shadow-blue-300">
      <NavbarBrand as={Link} href="/admin">
        <Image src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Axer
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menuItems.map((item) => (
          <NavbarLink
            as={Link}
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 transition-colors"
          >
            {item.icon}
            <span className="font-medium text-gray-700">{item.name}</span>
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}

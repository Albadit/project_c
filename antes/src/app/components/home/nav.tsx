"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "@/app/components/icons/hambuger_menu";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import Close from "@/app/components/icons/close";

const context = {
  logo: { img: "/img/antes_logo.png", url: "/" },
  login: { name: "Inloggen", url: "/login" },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Werken bij ons", href: "#" },
    { name: "Over ons", href: "#" },
    { name: "Contact", href: "#" },
  ],
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-2 px-5 lg:px-8 h-[64px] text-font1 font-font1 text-base bg-section shadow-cbs">
      {/* Desktop */}
      <ul className="h-[80%]">
        <li className="h-full">
          <Link href={context.logo.url} aria-label="logo">
            <img src={context.logo.img} alt="antes logo" className="h-full w-auto"/>
          </Link>
        </li>
      </ul>
      <ul className="hidden lg:flex gap-x-12">
        {context.navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="hidden lg:flex">
        <li>
          <Link href={context.login.url} className="flex items-center font-medium leading-6">
            {context.login.name} <ArrowForwardRounded className="w-4 ml-1 fill-font1" />
          </Link>
        </li>
      </ul>
      <div className="flex lg:hidden">
        <button type="button"
          title="openMenu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <HamburgerMenu className="h-9" />
        </button>
      </div>

      {/* Mobile */}
      <div className={`lg:hidden flex flex-col absolute top-0 right-0 h-full w-full sm:w-[300px] outline outline-1 outline-font1/10 bg-background ${ mobileMenuOpen ? "block" : "hidden" }`}>
        <div className="flex justify-between items-center sm:justify-end py-2 px-5 h-[64px]">
          <div className="flex sm:hidden h-[80%]">
            <Link href={context.logo.url} aria-label="logo">
              <img src={context.logo.img} alt="antes logo" className="h-full w-auto"/>
            </Link>
          </div>
          <button
            type="button"
            title="closeMenu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Close className="w-9 px-0.5" />
          </button>
        </div>
        <div className="flex flex-col gap-y-8 p-5">
          <ul className="flex flex-col gap-y-8">
            {context.navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            <hr className="border-font1/20" />
            <li>
              <Link href={context.login.url} className="font-medium">
                {context.login.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

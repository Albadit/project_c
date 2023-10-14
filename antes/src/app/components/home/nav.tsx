"use client";

import { useState } from 'react'
import HamburgerMenu from '@/app/components/icons/hambuger_menu';
import ArrowForwardRounded from '@/app/components/icons/arrow_forward_rounded';
import Close from '@/app/components/icons/close';
import Link from 'next/link';

const context = {
  login_text: "Inloggen",
  navigation: [
    { name: 'Home', href: '#' },
    { name: 'Werken bij ons', href: '#' },
    { name: 'Over ons ', href: '#' },
    { name: 'Contact', href: '#' },
  ]
}

export default function HeaderHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between p-5 lg:px-8 text-font1 font-font1 text-base bg-background shadow-cbs">
      {/* Desktop */}
      <ul>
        <li className="flex lg:flex-1">
          <Link href="#" aria-label="logo" className="-m-1.5 p-1.5">
            <img src="img/antes_logo.png" alt="antes logo" className="h-8 w-auto"/>
          </Link>
        </li>
      </ul>
      <ul className='hidden lg:flex gap-x-12'>
      {context.navigation.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="leading-6">
            {item.name}
          </Link>
        </li>
      ))}
      </ul>
      <ul className="hidden lg:flex">
        <li>
          <Link href="#" className="flex items-center font-medium leading-6">
            {context.login_text} <ArrowForwardRounded className="w-4 ml-1"/>
          </Link>
        </li>
      </ul>
      <div className="flex lg:hidden">
        <button type="button"
          className="-m-2.5 inline-flex items-center justify-center p-2.5"
          title='openMenu'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <HamburgerMenu  className="w-8"/>
        </button>
      </div>

      {/* Mobile */}
      <div className={`lg:hidden flex flex-col absolute top-0 right-0 h-full w-full sm:w-[300px] outline outline-1 outline-font1/20 bg-background ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex justify-between sm:justify-end p-5">
          <div className="flex sm:hidden">
          <Link href="#" className="-m-1.5 p-1.5">
            <img src="img/antes_logo.png" alt="antes logo" className="h-8 w-auto"/>
          </Link>
        </div>
          <button type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5"
            title='closeMenu'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Close className='w-7'/>
          </button>
        </div>
        <div className="flex flex-col gap-y-8 p-5">
          <ul className="flex flex-col gap-y-8">
          {context.navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="leading-6">
                {item.name}
              </Link>
            </li>
          ))}
          </ul>
          <hr className='border-font1/20'/>
          <Link href="#" className="flex items-center font-medium leading-6">{context.login_text}</Link>
        </div>
      </div>
    </nav>
  )
}

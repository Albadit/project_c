"use client";

import { useState } from 'react'
import IconHamburgerMenu from '@/app/components/icon/hambuger_menu';
import IconArrowForwardRounded from '@/app/components/icon/arrow_forward_rounded';
import IconClose from '@/app/components/icon/close';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Werken bij ons', href: '#' },
  { name: 'Over ons ', href: '#' },
  { name: 'Contact', href: '#' },

]

export default function HeaderHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow-lg">
      <nav className="flex items-center justify-between p-5 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="antes_logo.png"
              alt="antes logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <IconHamburgerMenu className="w-8" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-base font-font1 leading-6 text-font1">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="flex items-center text-base font-font1 font-medium leading-6">
            Inloggen <IconArrowForwardRounded className="w-4 ml-1" />
          </a>
        </div>
        <div className={`lg:hidden flex flex-col absolute top-0 right-0 h-full w-full sm:w-[300px] outline outline-1 outline-font1/20 bg-background ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-between sm:justify-end p-5">
            <div className="flex sm:hidden">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="antes_logo.png"
                  alt="antes logo"
                />
              </a>
            </div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <IconClose className='w-7 ' />
            </button>
          </div>
          <div className="flex flex-col gap-y-8 p-5">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-base font-font1 leading-6 text-font1">
                {item.name}
              </a>
            ))}
            <hr className='border-font1/20' />
            <a href="#" className="flex items-center text-base font-font1 font-medium leading-6">
              Inloggen
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

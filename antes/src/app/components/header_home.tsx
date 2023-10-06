"use client";

import { useState } from 'react'

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
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
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
            onClick={() => setMobileMenuOpen(true)}
          >
            <p>open</p>
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
          <a href="#" className="text-base font-font1 font-medium leading-6">
            Inloggen <span className='font-semibold' aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

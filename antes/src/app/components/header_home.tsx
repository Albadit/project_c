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

  const hambugerMenu = [];
  for (let i = 0; i < 3; i++) {
    hambugerMenu.push(<div key={i} className='w-7 h-0.5 m-[6px] rounded-full bg-font1'></div>);
  }

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
            onClick={() => setMobileMenuOpen(true)}
          >
            <div>{hambugerMenu}</div>
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
            Inloggen 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 fill-font1 ml-1" viewBox="0 0 24 24" fill="#888888">
              <path d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}

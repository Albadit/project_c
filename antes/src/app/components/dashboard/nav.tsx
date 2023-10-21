"use client";

import React from 'react';
import { useState } from 'react'
import HamburgerMenu from '@/app/components/icons/hambuger_menu';
import Close from '@/app/components/icons/close';
import Link from 'next/link';

type Props = {
  user: object
}

const context = {
  logo: { img: "/img/antes_logo.png", url: "/" },
  login: { name: "Inloggen", url: "#"},
  navigation: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Agenda', href: '#' },
    { name: 'E-learning', href: '#' },
    { name: 'Q & A', href: '#' },
  ],
  user: {
    name: 'Sara Leekman',
    email: 'saraleekman@outlook.com',
    profile: './img/profile.png',
    navigation: [
      { name: 'Jouw Profiel', href: '#' },
      { name: 'instellingen', href: '#' },
      { name: 'Uitloggen', href: '#' },
    ]
  }
}

export const NavDashboard = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav className="flex items-center justify-between py-2 px-5 lg:px-8 h-[64px] text-font1 font-font1 text-base bg-section shadow-cbs">
        {/* Desktop */}
        <ul className='h-[80%]'>
          <li className="h-full">
            <Link href={context.logo.url} aria-label="logo">
              <img src={context.logo.img} alt="antes logo" className="h-full"/>
            </Link>
          </li>
        </ul>
        <ul className='hidden lg:flex gap-x-12'>
        {context.navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
        </ul>
        <div className='hidden lg:flex flex-col relative'>
          <button type="button"
            title='openMenu'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <img src={context.user.profile} alt={context.user.name} className='h-full rounded-full'/>
          </button>
          <ul className={`flex flex-col absolute top-12 right-0 bg-background shadow-cbs p-3 gap-y-3 w-max pr-24 rounded outline outline-1 outline-font1/10 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          {context.user.navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button type="button"
            title='openMenu'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <HamburgerMenu className="w-8"/>
          </button>
        </div>

        {/* Mobile */}
        <div className={`lg:hidden flex flex-col absolute top-0 right-0 h-full w-full sm:w-[300px] outline outline-1 outline-font1/10 bg-background ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-between items-center sm:justify-end py-2 px-5 h-[64px]">
            <div className="flex sm:hidden h-[80%]">
              <Link href={context.logo.url} aria-label="logo">
                <img src={context.logo.img} alt="antes logo" className="h-full"/>
              </Link>
            </div>
            <button type="button"
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
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
              <hr className='border-font1/20'/>
              <li className='flex items-center gap-3'>
                <img src={context.user.profile} alt={context.user.name} className='h-max'/>
                <div className='truncate leading-5'>
                  <p className='truncate font-semibold'>{context.user.name}</p>
                  <p className='truncate'>{context.user.email}</p>
                </div>
              </li>
            {context.user.navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

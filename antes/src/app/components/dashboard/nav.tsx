"use client";

import React from 'react';
import { signOut } from 'next-auth/react';
import { useState } from 'react'
import HamburgerMenu from '@/app/components/icons/hambuger_menu';
import Close from '@/app/components/icons/close';
import Link from 'next/link';

export type UserProps = {
  name: string
  email: string
  image: string 
}

type Props = {
  user: UserProps | any
}

export const NavDashboard = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const context = {
    logo: { img: "/img/antes_logo.png", url: "/" },
    login: { name: "Inloggen", url: "#"},
    navigation: [
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Agenda', href: '/calendar' },
      { name: 'Event', href: '/event' },
      { name: 'E-learning', href: '/elearing' },
      { name: 'Q & A', href: '/qa' },
    ],
    user: {
      name: props.user.name,
      email: props.user.email,
      image: props.user.image,
      navigation: [
        { name: 'Jouw Profiel', href: '/profile/' },
        { name: 'Uitloggen', href: '/logout', redirect: '/' },
      ]
    }
  }
  
  return (
    <header>
      <nav className="z-50 flex items-center justify-between py-2 px-5 lg:px-8 h-[64px] text-font1 font-font1 text-base bg-section shadow-cbs">
        {/* Desktop */}
        <ul className='h-[80%]'>
          <li className="h-full">
            <Link href={context.logo.url} aria-label="logo">
              <img src={context.logo.img} alt="antes logo" className="h-full w-auto"/>
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
        <button className="hidden lg:flex h-[80%]" type="button" title='openMenu' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} >
          <img src={context.user.image} alt="profile" className="h-full w-auto rounded-full"/>
        </button>
        <div className='hidden lg:flex flex-col absolute top-14 right-6'>
          <ul className={`flex flex-col p-3 gap-y-3 w-max pr-24 bg-background shadow-cbs rounded outline outline-1 outline-font1/10 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          {context.user.navigation.map((item) => (
            <li key={item.name}>
              {item.href === "/logout" ? (
                <button onClick={() => signOut({ callbackUrl: item.redirect })}>{item.name}</button>
                ) : (
                <Link href={item.href}>{item.name}</Link>
                )
              }
            </li>
          ))}
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button type="button" title='openMenu' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <HamburgerMenu className="w-8"/>
          </button>
        </div>

        {/* Mobile */}
        <div className={`z-50 lg:hidden flex flex-col fixed top-0 right-0 h-full w-full sm:w-[300px] outline outline-1 outline-font1/10 bg-background ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-between items-center sm:justify-end py-2 px-5 h-[64px]">
            <div className="flex sm:hidden h-[80%]">
              <Link href={context.logo.url} aria-label="logo">
                <img src={context.logo.img} alt="antes logo" className="h-full w-full"/>
              </Link>
            </div>
            <button type="button" title='closeMenu' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Close className='w-9 px-0.5'/>
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
                <img src={context.user.image} alt={context.user.name} className="h-[40px] w-auto rounded-full"/>
                <div className='truncate leading-5'>
                  <p className='truncate font-semibold'>{context.user.name}</p>
                  <p className='truncate'>{context.user.email}</p>
                </div>
              </li>
            {context.user.navigation.map((item) => (
              <li key={item.name}>
                {item.href === "/logout" ? (
                  <button onClick={() => signOut({ callbackUrl: item.redirect })}>{item.name}</button>
                  ) : (
                  <Link href={item.href}>{item.name}</Link>
                  )
                }
              </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

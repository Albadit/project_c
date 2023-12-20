"use client"
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useSession } from 'next-auth/react';
import NavHome from '@/app/components/home/nav';
import Link from "next/link";
import Calendar from "@/app/components/icons/calendar";

const context = {
  image: "/img/event.png",
  title: "Connectiedag!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  location: "Rotterdam",
  date: "12-12-2024",
  link: "#",
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  return (
    <>
      {session && status === "authenticated" ? (<NavDashboard user={session?.user}/>) : (<NavHome />)}
      <main className='flex justify-center m-auto lg:p-12 p-5'>
        <section className="flex lg:flex-row-reverse flex-col justify-between lg:w-full w-[600px] gap-5 p-7 rounded-lg bg-section shadow-cbs text-base font-font1 text-font1">
        <img src={context.image} alt="event" className="lg:w-[60%] w-full lg:min-h-[580px] h-[280px] object-cover object-center rounded"/>
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-xl font-semibold text-primary">Event: {context.title}</h2>
            <p className="text-extra">{context.description}</p>
            <p>Locatie: {context.location}</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="flex flex-row items-center gap-2">
              <Calendar className="fill-extra h-5" />
              <p className="text-extra text-sm">{context.date}</p>
            </div>
            <Link href={context.link} className="flex flex-row items-center justify-center lg:w-max w-full gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
              Meld je aan!
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer/>
    </>
  )
}
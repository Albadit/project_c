"use client"
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { Event } from '@/app/components/event';
import { useSession } from 'next-auth/react';
import NavHome from '@/app/components/home/nav';

export default function Dashboard() {
  const { data: session, status } = useSession()
  return (
    <>
      {session && status === "authenticated" ? (<NavDashboard user={session?.user}/>) : (<NavHome />)}
      <main className='flex justify-center m-auto lg:p-12 p-5'>
        <Event event={{}} />
      </main>
      <Footer/>
    </>
  )
}
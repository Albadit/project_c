import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { Event } from '@/app/components/event';

const context = {
  user: {
    name: "Sara Leekman"
  }
}

export default function Dashboard() {
  return (
    <>
      <NavDashboard user={{}}/> 
      <main className='flex justify-center m-auto lg:p-12 p-5'>
        <Event event={{}} />
      </main>
      <Footer/>
    </>
  )
}

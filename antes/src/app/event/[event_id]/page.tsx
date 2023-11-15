import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { Event } from '@/app/components/event';

const context = {
  user: {
    name: "Sara Leekman"
  }
}

const user = {
  id: 1,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekman",
  function_id: 3,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
}

export default function Dashboard() {
  return (
    <>
      <NavDashboard user={user}/> 
      <main className='flex justify-center m-auto lg:p-12 p-5'>
        <Event event={{}} />
      </main>
      <Footer/>
    </>
  )
}

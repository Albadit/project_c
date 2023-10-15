import React from 'react';
import { NavDashboard } from '@/app/components/dashboard/nav'
import Footer from '@/app/components/footer';

export default function Dashboard() {
  return (
    <>
      <header>
        <NavDashboard user={{}}/>
      </header>
      <main className='flex flex-col gap-5 '>
        <p>gemaakt door ayoeb geinspireerd door hicham</p>
        <a href="/" className='bg-[#AE0800] hover:bg-[#000] hover:text-[#fff] text-white rounded-[10px] py-1 px-5 text-xl'>tests</a>
      </main>
      {/* <Footer/> */}
    </>
  )
}

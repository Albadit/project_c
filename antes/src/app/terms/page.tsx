'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import NavHome from '@/app/components/home/nav'

export default function Qa() {
  return (
    <>
      <NavHome/>
      <main className='m-auto p-5 my-12 max-w-[750px]'>
        <section className='flex flex-col w-full gap-5 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Q & A Vragen</h1>
          <hr />
        </section>
      </main>
      <Footer/>
    </>
  )
}

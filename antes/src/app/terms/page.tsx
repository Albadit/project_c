'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import NavHome from '@/app/components/home/nav'

export default function Terms() {
  return (
    <>
      <NavHome/>
      <main className='m-auto p-5 my-12 max-w-[750px]'>
        <section className='flex flex-col w-full gap-5 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Terms and Conditions</h1>
          <hr />
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p>Welcome to our website. These terms and conditions apply to the use of this website.</p>
            <h2 className="text-xl font-semibold mb-4">2. Intellectual Property Rights</h2>
            <p>The content of this website is protected by copyright and other intellectual property rights.</p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

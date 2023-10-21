import React from 'react';
import Nav from '@/app/components/home/nav'
import Footer from '@/app/components/footer'
import Title from '@/app/components/home/title'
import Work from '@/app/components/home/work'
import { QACard } from '@/app/components/qa_card'
import { EventCard } from '@/app/components/event_card'
import Info from '@/app/components/home/info'

export default function Home() {
  return (
    <>
      <header>
        <Nav/>
        <Title/>
      </header>
      <br />
      <main className='flex flex-wrap justify-center m-auto p-5 gap-10 max-w-[1280px]'>
        <Work/>
        <section className='flex flex-col w-full gap-10 my-12 '>
          <h2 className='font-font1 font-semibold text-center text-primary text-5xl'>ANTES NIEUWS</h2>
          <div className='flex flex-wrap xl:justify-between justify-center gap-10'>
            <QACard qa={{}} />
            <EventCard event={{}}/>
          </div>
        </section>
        <Info/>
      </main>
      <br />
      <Footer/>
    </>
  )
}

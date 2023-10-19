import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { QACard } from '@/app/components/qa_card';
import { EventCard} from '@/app/components/event_card';

export default function Dashboard() {
  return (
    <>
      <header>
        <NavDashboard user={{}}/>
      </header>
      <main className='flex flex-wrap justify-center m-auto p-5 gap-10 max-w-[1280px]'>
        <div className='flex flex-col w-full gap-10 my-12'>
          <h2 className='font-font1 font-semibold text-center text-primary text-5xl'>ANTES NIEUWS</h2>
          <div className='flex flex-wrap xl:justify-between justify-center gap-10'>
            <QACard qa={{}} />
            <EventCard event={{}}/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

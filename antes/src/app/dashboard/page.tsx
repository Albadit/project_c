import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { QACard } from '@/app/components/qa_card';
import { EventCard} from '@/app/components/event_card';

const context = {
  user: {
    name: "Sara Leekman"
  }
}

export default function Dashboard() {
  return (
    <>
      <header>
        <NavDashboard user={{}}/>
      </header>
      <main className='flex flex-wrap justify-center m-auto p-5 gap-10 max-w-[1280px]'>
        <div className='flex flex-col w-full gap-10 my-12'>
          <h2 className='font-font1 font-semibold text-center text-primary text-5xl'>Goeiedag {context.user.name}</h2>
          <div className='flex flex-wrap justify-between gap-10 [&>*]:flex-[1_1_525px]'>
            <div className='flex justify-center w-full'>
              <QACard qa={{}} />
            </div>
            <div className='flex justify-center w-full'>
              <EventCard event={{}}/>
            </div>
            <div className='flex justify-center w-full'>
              <EventCard event={{}}/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { QACard } from '@/app/components/qa_card';
import { EventCard} from '@/app/components/event_card';
import { ELearingCard } from '@/app/components/e_learing_card';

const context = {
  user: {
    name: "Sara Leekman"
  }
}

export default function Dashboard() {
  return (
    <>
      <NavDashboard user={{}}/>
      <main className='flex flex-wrap justify-center m-auto p-5 gap-10 max-w-[1280px]'>
        <section className='flex flex-col w-full gap-20 my-12'>
          <h2 className='font-font1 font-bold text-center text-primary text-5xl'>Goeiedag {context.user.name}</h2>
          <div className='flex flex-wrap justify-between gap-10 gap-y-20 [&>*]:flex-[1_1_525px]'>
            <div className='flex flex-col items-center justify-center gap-10'>
              <p className='font-font1 font-semibold text-center text-primary text-3xl'>Nieuwste Q & A</p>
              <QACard qa={{}} />
            </div>
            <div className='flex flex-col items-center justify-center gap-10'>
              <p className='font-font1 font-semibold text-center text-primary text-3xl'>Nieuwste Evenement</p>
              <EventCard event={{}}/>
            </div>
            <div className='flex flex-col items-center justify-center gap-10'>
              <p className='font-font1 font-semibold text-center text-primary text-3xl'>E-learing progressie</p>
              <ELearingCard elearing={{}}/>
            </div>
          </div>
        </section> 
      </main>
      <Footer/>
    </>
  )
}

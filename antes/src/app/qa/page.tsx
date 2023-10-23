import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import Chat from '../components/icons/chat';

const context = {
  user: {
    name: "Sara Leekman"
  },
  tags: ["golang", "stress", "rlex", "boek", "booktok", "planning maken"],
  question: [
    {
      id: 1,
      name:"Sara Leekman",
      img: "/img/profile.png",
      datetime: "23-10-2023",
      title: "Hoe gaan jullie om met stress?",
      tags: ["stress", "rlex", "boek"],
      reactions: 12
    },
    {
      id: 2,
      name:"Sara Leekman",
      img: "/img/profile.png",
      datetime: "23-10-2023",
      title: "Hoe gaan jullie om met stress?",
      tags: ["stress", "rlex", "boek"],
      reactions: 12
    }
  ]
}

export default function Qa() {
  return (
    <>
      <NavDashboard user={{}}/>
      <main className='m-auto p-5 max-w-[750px]'>
        <section className='flex flex-col w-full gap-8 my-12'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Q & A Vragen</h1>
          <hr />
          <div className='flex flex-row gap-2'>
          {context.tags.map((item) => (
            <span key={item} className='bg-[#EAEAEA] text-extra py-1 px-4 rounded-full'>{item}</span>
          ))}
          </div>
          {context.question.map((item) => (
          <div key={item.id} className='flex flex-col py-6 px-7 gap-5 rounded-lg bg-section shadow-cbs'>
            <div className='flex flex-row items-center gap-5'>
              <img src={item.img} alt="" className='h-full'/>
              <div className='flex flex-col'>
                <p className='font-semibold'>{item.name}</p>
                <span className='text-sm text-extra'>{item.datetime}</span>
              </div>
            </div>
            <p className='font-bold'>{item.title}</p>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row gap-2'>
              {item.tags.map((tag) => (
                <span key={tag} className='bg-[#EAEAEA] py-1 px-4 rounded text-sm text-extra'>{tag}</span>
              ))}
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Chat className="fill-extra h-5" />
                <p className="text-sm text-extra">{item.reactions}</p>
              </div>
            </div>
          </div>
          ))}
        </section> 
      </main>
      <Footer/>
    </>
  )
}

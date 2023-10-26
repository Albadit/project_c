import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { QACardList } from '@/app/components/dashboard/qa_card_list';

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
      latestComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      reactions: 12,
      url: "#"
    },
    {
      id: 2,
      name:"Sara Leekman",
      img: "/img/profile.png",
      datetime: "23-10-2023",
      title: "Hoe gaan jullie om met stress?",
      tags: ["stress", "rlex", "boek"],
      latestComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      reactions: 12,
      url: "#"
    }
  ]
}

export default function Qa() {
  return (
    <>
      <NavDashboard user={{}}/>
      <main className='m-auto p-5 max-w-[750px]'>
        <section className='flex flex-col w-full gap-8 my-12 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Q & A Vragen</h1>
          <hr />
          <div className='flex flex-row gap-2'>
          {context.tags.map((item) => (
            <span key={item} className='bg-[#EAEAEA] text-extra py-1 px-4 rounded-full hover:bg-primary hover:text-font2 ease-in duration-300'>{item}</span>
          ))}
          </div>
          <QACardList qaList={context.question}/>
        </section> 
      </main>
      <Footer/>
    </>
  )
}

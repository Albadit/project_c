'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { QACardList } from '@/app/components/dashboard/qa_card_list';
import { Paginator } from '@/app/components/paginator';

const user = {
  id: 1,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekman",
  function_id: 1,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
}

const tags = ["golang", "stress", "rlex", "boek", "booktok", "planning maken"]

const question = [
  {
    id: 1,
    name:"Sara Leekman",
    img: "/img/profile.png",
    datetime: "23-10-2023",
    title: "Suggesties voor beginner?",
    tags: ["stress", "rlex", "boek"],
    latestComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
    reactions: 12,
    url: "/qa/chat"
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
    url: "/qa/chat"
  },
  {
    id: 3,
    name:"Sara Leekman",
    img: "/img/profile.png",
    datetime: "23-10-2023",
    title: "Hoe gaan jullie om met stress?",
    tags: ["stress", "rlex", "boek"],
    latestComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
    reactions: 12,
    url: "/qa/chat"
  }
]

export default function Qa() {
  return (
    <>
      <NavDashboard user={user}/>
      <main className='m-auto p-5 my-12 max-w-[750px]'>
        <section className='flex flex-col w-full gap-5 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Q & A Vragen</h1>
          <hr />
          <div className='flex flex-row gap-2 overflow-x-auto'>
          {tags.map((item) => (
            <span key={item} className='bg-[#EAEAEA] whitespace-nowrap text-extra py-2 px-4 rounded-full hover:bg-primary hover:text-font2 ease-in duration-300'>{item}</span>
          ))}
          </div>
          <QACardList qaList={question}/>
          {/* <Paginator qaList={question}/> */}
        </section>
      </main>
      <Footer/>
    </>
  )
}
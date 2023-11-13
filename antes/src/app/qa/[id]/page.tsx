'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import AttachFile from '@/app/components/icons/attach_file';
import Smile from '@/app/components/icons/smile';

const user = {
  id: 4,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekman",
  function_id: 2,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
}

const question = {
  user: {
    id: 1,
    title: "Suggesties voor beginner? ",
    requested: "Sara Leekman",
    datetime: "23-10-2023",
  },
  answers: [
    {
      id: 1,
      name:"Michael Foster",
      profile: "/img/profile.png",
      title: "Suggesties voor beginner?",
      datetime: "23-10-2023",
      comment: "Het behouden van een gezonde werk-privébalans is cruciaal voor je welzijn. Stel duidelijke grenzen tussen je werkuren en vrije tijd. Leer ook 'nee' te zeggen als je te veel taken op je bord krijgt. Zorg voor voldoende ontspanning en hobby's om stress te verminderen.",
    },
    {
      id: 2,
      name:"Whitney Francis",
      profile: "/img/profile.png",
      title: "Suggesties voor beginner?",
      datetime: "23-10-2023",
      comment: "Stress is onvermijdelijk, maar je kunt leren hoe je er beter mee omgaat. Praktijkmethoden zoals ademhalingsoefeningen, meditatie en mindfulness kunnen helpen. Daarnaast is communiceren met collega's en leidinggevenden over je stressbronnen belangrijk, omdat ze vaak kunnen helpen bij het vinden van oplossingen.",
    },
    {
      id: 3,
      name:"Lindsay Walton",
      profile: "/img/profile.png",
      title: "Suggesties voor beginner?",
      datetime: "23-10-2023",
      comment: "Blijf leren en groeien door training, bijscholing en het bijhouden van de nieuwste ontwikkelingen in je vakgebied. Zoek mentors of collega's met meer ervaring voor begeleiding en feedback. Overweeg ook om aanvullende certificeringen te behalen om je vaardigheden en kansen te vergroten.",
    },
    {
      id: 4,
      name:"Sara Leekman",
      profile: "/img/profile.png",
      title: "Suggesties voor beginner?",
      datetime: "23-10-2023",
      comment: "Dank je wel voor het stellen van deze drie essentiële vragen over werken en professionele groei. Het is geweldig om te zien dat je al vroeg in je carrière nadenkt over deze aspecten, omdat dit een teken is van je toewijding om te groeien en te gedijen in de professionele wereld. Onthoud dat leren en evolueren een continu proces is, en ik wens je veel succes en voldoening in je werk. Als je nog meer vragen hebt of hulp nodig hebt in de toekomst, aarzel dan niet om terug te komen voor advies. Blijf nieuwsgierig en blijf groeien!",
    },
  ]
}

export default function Chat() {
  return (
    <>
      <NavDashboard user={user}/>
      <main className='m-auto p-5 max-w-[800px]'>
        <section className='flex flex-col w-full gap-5 mt-12 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Q & A Vragen</h1>
          <h2 className='font-font1 font-bold text-2xl'>Title: {question.user.title}</h2>
          <div className='flex flex-col text-extra'>
            <p>Gevraagd: {question.user.requested}</p>
            <p>Datum: {question.user.datetime}</p>
          </div>
          <hr />
          {question.answers.map((item) => (
            <div key={item.id} className={`flex ${user.id == item.id ? 'flex-row-reverse justify-start' : 'flex-row justify-start'} sm:gap-5 gap-2`}>
              <img src={item.profile} alt="profile" className={`h-full ${user.id == item.id ? 'hidden' : 'block'}`}/>
              <div className={`flex flex-col p-3 gap-3 rounded-lg shadow-cbs-sm w-full max-w-[500px] ${user.id == item.id ? 'bg-section' : 'bg-[#F0F0F0]'}`}>
                <p className={`font-font1 text-lg font-semibold ${user.id == item.id ? 'hidden' : 'block'}`}>{item.name}</p>
                <p className='text-extra text-ms leading-5 '>{item.comment}</p>
                <p className='font-font1 text-extra text-right text-sm'>{item.datetime}</p>
              </div>
              <div className='w-[40px] h-[40px] sm:p-5 p-2'></div>
            </div>
          ))}
          <div className='flex flex-row gap-5'>
            <img src={user.profile} alt="" className='h-full sm:block hidden'/>
            <form action="" className='comment bg-section flex flex-col gap-2 p-3 w-[500px] h-[120px] rounded-lg shadow-sm border-[1px] border-font1/20 focus-within:outline focus-within:outline-2 focus-within:outline-callToAction focus-within:outline-offset-[-2px] sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75'>
              <textarea name="comment" placeholder='Schrijf jouw comment...' className='grow border-0 p-0 m-0 bg-section resize-none focus:ring-0 focus:border-transparent'/>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-1'>
                  <AttachFile className='h-[75%] rotate-[210deg] fill-extra'/>
                  <Smile className='h-[75%] fill-extra'/>
                </div>
                <button className='px-2.5 py-1.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>comment</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

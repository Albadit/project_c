import React from 'react';
import NavHome from '@/app/components/home/nav'
import Footer from '@/app/components/footer'
import Title from '@/app/components/home/title'
import Work from '@/app/components/home/work'
import { QACard } from '@/app/components/qa_card'
import { EventCard } from '@/app/components/event_card'
import Info from '@/app/components/home/info'

const qa = {
  id: 1,
  name: "Sara Leekman",
  image: "/img/qa.png",
  datetime: "12-12-2024",
  title: "Suggesties voor beginner?",
  latest_comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  reactions: 12,
  profile: "img/profile.png",
  url: "/qa/1",
}

const event = {
  id: 1,
  image: "/img/event.png",
  title: "Connectiedag!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  location: "Rotterdam",
  date: "12-12-2024",
  url: "/event",
}

export default function Home() {
  return (
    <>
      <NavHome />
      <Title />
      <main className='flex flex-wrap justify-center m-auto p-5 my-12 gap-10 max-w-[1280px]'>
        <Work />
        <section className='flex flex-col w-full gap-10 my-12 '>
          <h2 className='font-font1 font-semibold text-center text-primary text-5xl'>ANTES NIEUWS</h2>
          <div className='flex flex-wrap xl:justify-between justify-center gap-10'>
            <QACard qa={qa} />
            <EventCard event={event} />
          </div>
        </section>
        <Info />
      </main>
      <br />
      <Footer />
    </>
  )
}
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { QACard } from '@/app/components/qa_card';
import { EventCard} from '@/app/components/event_card';
import { ELearningCard } from '@/app/components/elearning_card';

const qa = {
  id: 1,
  name: "Sara Leekman",
  image: "/img/qa.png",
  datetime: "12-12-2024",
  title: "Suggesties voor beginner?",
  latest_comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  reactions: 12,
  profile: "/img/profile.png",
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

const elearning = {
  id: 1,
  image: "img/e_learing.png",
  title: "H1. Introduction.",
  user_chapters: 8,
  max_chapters: 11,
  url: "/elearing",
}

const user = {
  id: 1,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekman",
  function_id: 3,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
}

export default function Dashboard() {
  return (
    <>
      <NavDashboard user={user}/>
      <main className='flex flex-wrap justify-center m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col w-full gap-20'>
          <h1 className='font-font1 font-bold text-center text-primary text-5xl'>Goeiedag {`${user.first_name} ${user.last_name}`}</h1>
          <div className='flex flex-wrap justify-between gap-10 gap-y-20 [&>*]:flex-[1_1_525px]'>
            <div className='flex flex-col items-center justify-center gap-10'>
              <h2 className='font-font1 font-semibold text-center text-primary text-3xl'>Nieuwste Q & A</h2>
              <QACard qa={qa} />
            </div>
            <div className='flex flex-col items-center justify-center gap-10'>
              <h2 className='font-font1 font-semibold text-center text-primary text-3xl'>Nieuwste Evenement</h2>
              <EventCard event={event}/>
            </div>
            <div className='flex flex-col items-center justify-center gap-10'>
              <h2 className='font-font1 font-semibold text-center text-primary text-3xl'>E-learing progressie</h2>
              <ELearningCard elearning={elearning}/>
            </div>
          </div>
        </section> 
      </main>
      <Footer/>
    </>
  )
}

import React from 'react';
import Link from "next/link";
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'

import Arrowright from "@/app/components/icons/arrow_right";
import { ELearningCard } from '@/app/components/elearning_card';
import { SubjectCard } from '@/app/components/dashboard/subject_card';

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

const elearing = {
  id: 1,
  image: "img/e_learing.png",
  title: "H1. Introduction.",
  user_chapters: 8,
  max_chapters: 11,
  url: "/elearing",
}

const subject = {
  id: 1,
  image: "img/e_learing.png",
  title: "Psychiatrie",
  description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  url: "/elearing",
}

export default function ELearning() {
  return (
    <>
    <NavDashboard user={user}/>
    <main className='m-auto p-5 my-12 max-w-[1280px]'>
      <section className='flex flex-col gap-10 mb-12'>
        <h1 className="font-font1 font-bold text-center text-primary text-5xl">E-Learning</h1>
        <div className='flex md:flex-row flex-col justify-center gap-5 2xl:gap-10'>
          <ELearningCard elearning={elearing} />
          <ELearningCard elearning={elearing} />
        </div>
        <div className='flex items-stretch justify-center 2xl:justify-end 2xl:mr-[331px] gap-6'>
          <button className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
            <Arrowright className="rotate-180 fill-font2 h-5" />
          </button>
          <button className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
            <Arrowright className="fill-font2 h-5" />
          </button>
        </div>
      </section>
      <section className='flex flex-col gap-10'>
        <h1 className="tfont-font1 font-bold text-center text-primary text-5xl">Onderwerpen</h1>
        <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
        {/* </div>
        <div className='flex flex-wrap 2xl:flex-row justify-center gap-10'> */}
          <SubjectCard subject={subject} />
          <SubjectCard subject={subject} />
          <SubjectCard subject={subject} />
        {/* </div>
        <div className='flex flex-wrap 2x;:flex-row justify-center gap-10'> */}
          <SubjectCard subject={subject} />
          <SubjectCard subject={subject} />
          <SubjectCard subject={subject} />
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}

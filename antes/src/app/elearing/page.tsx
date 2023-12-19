"use client"
import React from 'react';
import Link from "next/link";
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import Arrowright from "@/app/components/icons/arrow_right";
import { ELearningCard } from '@/app/components/elearning_card';
import { SubjectCard } from '@/app/components/dashboard/subject_card';
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

const elearing = {
  id: 1,
  image: "img/e_learing.png",
  title: "H1. Introduction.",
  user_chapters: 8,
  max_chapters: 11,
  url: "/elearing/1",
}

const subjects = [
  {
    id: 1,
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    url: "/elearing/1",
  },
  {
    id: 1,
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    url: "/elearing/1",
  },
  {
    id: 1,
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    url: "/elearing/1",
  },
  {
    id: 1,
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    url: "/elearing/1",
  },
  {
    id: 1,
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    url: "/elearing/1",
  },
  {
    id: 1,
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    url: "/elearing/1",
  },
]

export default function ELearning() {
  const router = useRouter()
  const { data: session, status } = useSession()
  
  if (!session && status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null; }
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col gap-10 mb-12'>
          <h1 className="font-font1 font-bold text-center text-primary text-5xl break-words">E-Learning</h1>
          <div className='flex md:flex-row flex-col justify-center gap-5 2xl:gap-10'>
            <ELearningCard elearning={elearing} />
            <ELearningCard elearning={elearing} />
          </div>
          <div className='flex items-center justify-center gap-6'>
            <button className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
              <Arrowright className="rotate-180 fill-font2 h-5" />
            </button>
            <button className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
              <Arrowright className="fill-font2 h-5" />
            </button>
          </div>
        </section>
        <section className='flex flex-col gap-10'>
          <h1 className="tfont-font1 font-bold text-center text-primary text-5xl break-words">Onderwerpen</h1>
          <div className='flex flex-wrap justify-center gap-8'>
            {subjects.map((item, index) => 
              <SubjectCard key={index} subject={item} />
            )}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

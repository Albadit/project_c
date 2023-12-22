"use client"
import React, { useRef } from 'react'
import Footer from '@/app/components/footer'
import { NavDashboard } from '@/app/components/dashboard/nav'
import Arrowright from "@/app/components/icons/arrow_right"
import { ELearningCard } from '@/app/components/dashboard/elearning_card'
import { SubjectCard } from '@/app/components/dashboard/subject_card'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const elearing = [
  {
    id: "1",
    image: "img/e_learing.png",
    title: "H1. Introduction.",
    user_chapters: 8,
    max_chapters: 11,
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "H2. Introduction.",
    user_chapters: 8,
    max_chapters: 11,
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "H3. Introduction.",
    user_chapters: 8,
    max_chapters: 11,
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "H4. Introduction.",
    user_chapters: 8,
    max_chapters: 11,
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "H5. Introduction.",
    user_chapters: 8,
    max_chapters: 11,
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "H6. Introduction.",
    user_chapters: 8,
    max_chapters: 11,
  },
]

const subjects = [
  {
    id: "1",
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  },
  {
    id: "1",
    image: "img/e_learing.png",
    title: "Psychiatrie",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  },
]

export default function ELearning() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideWidth = 500;

  const scrollNext = () => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft
      const nextScroll = currentScroll + slideWidth
      sliderRef.current.scrollTo({ left: nextScroll, behavior: 'smooth' })
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft
      const prevScroll = currentScroll - slideWidth
      sliderRef.current.scrollTo({ left: prevScroll, behavior: 'smooth' })
    }
  };
  
  if (status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null; }
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col gap-10 mb-12'>
          <h1 className="font-font1 font-bold text-center text-primary text-5xl break-words">E-Learning</h1>
          <div ref={sliderRef} className='flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-pl-6 py-5 gap-12'>
            {elearing.map((item, index) => 
              <div className="snap-start shrink-0 first:pl-6 last:pr-6">
                <ELearningCard key={index} elearning={item} />
              </div>
            )}
          </div>
          <div className='flex items-center justify-center gap-6'>
            <button type="button" onClick={scrollPrev} className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
              <Arrowright className="rotate-180 fill-font2 h-5" />
            </button>
            <button type="button" onClick={scrollNext}  className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
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

'use client'
import React from 'react'
import Footer from '@/app/components/footer'
import { NavDashboard } from '@/app/components/dashboard/nav'
import { QACard } from '@/app/components/qa_card'
import { EventCard} from '@/app/components/event_card'
import { ELearningCard } from '@/app/components/elearning_card'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

const elearning = {
  id: 1,
  image: "img/e_learing.png",
  title: "H1. Introduction.",
  user_chapters: 8,
  max_chapters: 11,
  url: "/elearing",
}

type EventItems = {
  id: string
  title: string
  image: string
  description: string
  dateStart: string
  location: string
}

type QaItems = {
  id: string
  title: string
  name: string
  profile: string
  image: string
  dateCreate: string
  reactions: number
  bio: string
}

type ElearningItems = {
  id: string
  title: string
  image: string
  dateCreate: string
  reactions: number
  bio: string
}

type HomeData = {
  event: EventItems;
  qa: QaItems;
  elearning: ElearningItems;
}

type ApiResponse<T> = {
  status: string;
  data: T;
}

export default function Dashboard() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<HomeData> | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/v1/cards')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (!session && status === "loading") return <p className='text-center'>Loading data...</p>;
  if (status === "unauthenticated") { router.push('/'); return null; }

  return (<>
    {isLoading ? (<p className='text-center'>Loading data...</p>) : ( data?.status === "error" ? (<p className='text-center'>No data find</p>) : (<>
      <NavDashboard user={session?.user}/>
      <main className='flex flex-wrap justify-center m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col w-full gap-20'>
          <h1 className='font-font1 font-bold text-center text-primary text-5xl'>Goeiedag {session?.user?.name}</h1>
          <div className='flex flex-wrap justify-between gap-10 gap-y-20 [&>*]:flex-[1_1_525px]'>
            <div className='flex flex-col items-center justify-top gap-10'>
              <h2 className='font-font1 font-semibold text-center text-primary text-3xl'>Nieuwste Q & A</h2>
              {data && data.data.qa && <QACard qa={data.data.qa} />}
            </div>
            <div className='flex flex-col items-center justify-top gap-10'>
              <h2 className='font-font1 font-semibold text-center text-primary text-3xl'>Nieuwste Evenement</h2>
              {data && data.data.event && <EventCard event={data.data.event} />}
            </div>
            <div className='flex flex-col items-center justify-top gap-10'>
              <h2 className='font-font1 font-semibold text-center text-primary text-3xl'>E-learing progressie</h2>
              <ELearningCard elearning={elearning}/>
            </div>
          </div>
        </section> 
      </main>
      <Footer/>
    </>))}
  </>)
}

'use client'
import React from 'react'
import Footer from '@/app/components/footer'
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { QACard, QaProps } from '@/app/components/qa_card'
import { EventCard, EventProps} from '@/app/components/event_card'
import { ELearningCard, ElearningProps} from '@/app/components/dashboard/elearning_card'
import { PostData, FetchData } from '@/app/components/functions'

const elearning = {
  id: "1",
  image: "img/e_learing.png",
  title: "H1. Introduction.",
  user_chapters: 8,
  max_chapters: 11,
}

type HomeData = {
  event: EventProps
  qa: QaProps
  elearning: ElearningProps
}

type ApiResponse<T> = {
  status: string
  data: T
}

export default function Dashboard() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<HomeData> | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    FetchData(setData, setLoading, '/api/v1/cards')
  }, [])

  if (status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null; }

  if (isLoading) return <p className='text-center'>Loading data...</p>
  if (data?.status === "error") return <p className='text-center'>No data find</p>

  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='flex flex-wrap justify-center m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col w-full gap-20'>
          <h1 className='font-font1 font-bold text-center text-primary text-5xl break-words'>Goedemorgen {session?.user?.name}</h1>
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
    </>
  )
}

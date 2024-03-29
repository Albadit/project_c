'use client'
import React from 'react'
import Footer from '@/components/footer'
import { NavDashboard } from '@/components/dashboard/nav'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { QACard, QaProps } from '@/components/qa_card'
import { EventCard, EventProps} from '@/components/event_card'
import { ELearningCard, ElearningProps} from '@/components/dashboard/elearning_card'
import { PostData, FetchData } from '@/components/functions'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'

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
    FetchData(setData, setLoading, `/api/v1/cards/${session?.user.id}`)
  }, [status, session?.user.id])

  if (status === "loading") return <LoadingScreen/>
  if (status === "unauthenticated") { router.push('/'); return null }

  if (isLoading) return <LoadingScreen/> 
  if (data?.status === "error") return <NoDataFind/>

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
            {data && data.data.elearning ? (
              <div className='flex flex-col items-center justify-top gap-10'>
                <h2 className='font-font1 font-semibold text-center text-primary text-3xl'>E-learing progressie</h2>
                {data && data.data.elearning && <ELearningCard elearning={data.data.elearning} />}
              </div>
            ) : (<></>)}
          </div>
        </section> 
      </main>
      <Footer/>
    </>
  )
}
